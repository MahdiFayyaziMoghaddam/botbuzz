"use server";

import { createAuthClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const name = formData.get("name") as string;

	if (!email || !password || !name) {
		return { error: "All fields are required." };
	}

	const supabase = await createAuthClient();
	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: { name, notification: false, subscription: "Free" }
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

export const signout = async () => {
	const supabase = await createAuthClient();
	try {
		await supabase.auth.signOut();
	} catch {}
	return redirect("/signin", "replace");
};

export const getUser = async () => {
	const supabase = await createAuthClient();
	const {
		data: { user }
	} = await supabase.auth.getUser();
	return user;
};
