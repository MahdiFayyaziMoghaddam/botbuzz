"use server";

import { getSubscriptions } from "@/database/actions";
import { createAuthClient, createDBClient } from "@/lib/supabase";
import { Subscription } from "@/types/database";
import { UserMetadata } from "@/types/user";
import { cropToSquare } from "@/utils/cropToSquare";
import { redirect } from "next/navigation";
import { cache } from "react";

const AVATAR_BUCKET = "avatars";

export async function signup(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const name = formData.get("name") as string;

	if (!email || !password || !name) {
		return { error: "All fields are required." };
	}

	if (name.length < 2 || name.length > 33) {
		return { error: "Name length must be lower than 33 and higher than 2" };
	}

	const supabase = await createAuthClient();
	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: { name, notification: false, subscription: null, image: "/images/user.png" } as UserMetadata
		}
	});

	if (error) {
		return { error: error.message };
	}

	redirect("/onboarding", "replace");
}

export async function signin(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (!email || !password) {
		return { error: "All fields are required." };
	}

	const supabase = await createAuthClient();
	const { error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) {
		return { error: error.message };
	}

	redirect("/chat", "replace");
}

export const signinWithGoogle = async (redirectTo?: string) => {
	const supabase = await createAuthClient();
	await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo,
			skipBrowserRedirect: false
		}
	});
};

export const signout = async () => {
	const supabase = await createAuthClient();
	try {
		await supabase.auth.signOut();
	} catch {}
	return redirect("/signin", "replace");
};

export const getUser = cache(async () => {
	const supabase = await createAuthClient();
	const {
		data: { user },
		error
	} = await supabase.auth.getUser();
	return { user: { ...user, user_metadata: user?.user_metadata as UserMetadata }, error: error?.message };
});

interface UpdateUser {
	notification?: boolean;
	name?: string;
	email?: string;
	password?: string;
	confirm?: string;
	subscriptionID?: Subscription["id"];
	image?: string;
}
export const updateUser = async ({
	email,
	image,
	name,
	notification,
	password,
	subscriptionID,
	confirm
}: UpdateUser) => {
	const imageRegex =
		/^(https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(\/[^\s?]*)*\/[^\s?]*\.[a-zA-Z]{2,4}|^\/[^\s?]*\.[a-zA-Z]{2,4})$/;
	if (password && confirm && password !== confirm) {
		return { error: "Passwords don't match" };
	}
	if (image && !imageRegex.test(image)) {
		return { error: "Image must be file url or absolute path" };
	}
	if (name && (name.length < 2 || name.length > 33)) {
		return { error: "Name length must be lower than 33 and higher than 2" };
	}
	let subscription = undefined;
	if (subscriptionID) {
		const { data } = await getSubscriptions();
		subscription = data.find((sub) => sub.id === subscriptionID);
		if (!subscription) return { error: "Subscription id is invalid" };
	}
	const supabase = await createAuthClient();
	const {
		data: { user },
		error
	} = await supabase.auth.updateUser({
		email,
		password,
		data: { name, notification, subscription, image }
	});
	return { user, error: error?.message };
};

export const uploadUserAvatar = async (file: File) => {
	if (file.size > 1024 * 1024 * 5) {
		return {
			error: "File is too large, Maximum size is 5MB"
		};
	}
	const arrayBuffer = await file.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	if (buffer.byteLength > 1024 * 1024 * 5) {
		return {
			error: "File is too large, Maximum size is 5MB"
		};
	}
	try {
		const croppedBuffer = await cropToSquare(buffer);
		const supabase = await createDBClient();
		const { user } = await getUser();

		if (!user) {
			return { error: "User not authenticated" };
		}

		const fileExt = "webp";
		const fileName = `${crypto.randomUUID()}.${fileExt}`;
		const filePath = `${user.id}/${fileName}`;

		const { error: listError, data } = await supabase.storage.from(AVATAR_BUCKET).list(`${user.id}`);
		if (listError) {
			return { error: listError.message };
		}

		if (data.length) {
			const { error: removeError } = await supabase.storage
				.from(AVATAR_BUCKET)
				.remove(data.map(({ name }) => `${user.id}/${name}`));
			if (removeError) {
				return { error: removeError.message };
			}
		}

		const { error: uploadError } = await supabase.storage.from(AVATAR_BUCKET).upload(filePath, croppedBuffer, {
			contentType: "image/webp",
			upsert: true,
			cacheControl: "0"
		});
		if (uploadError) {
			return { error: uploadError.message };
		}

		const {
			data: { publicUrl }
		} = supabase.storage.from(AVATAR_BUCKET).getPublicUrl(filePath);
		const { error } = await updateUser({
			image: publicUrl
		});
		if (error) {
			return { error };
		}
		return { data: publicUrl };
	} catch (error) {
		return {
			error: error instanceof Error ? error.message : "An unexpected error occurred"
		};
	}
};
