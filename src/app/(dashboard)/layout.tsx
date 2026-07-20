import { ReactNode } from "react";
import Provider from "./_provider";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";
import { getServerSidePathname } from "@/utils/getServerSidePathname";
import { State } from "@/types/reducer";
import { getPersonalities, getSubscriptions } from "@/database/actions";

export const generateMetadata = async () => {
	const title = (await getServerSidePathname())
		.split("")
		.slice(1)
		.map((char, i) => (i === 0 ? char.toUpperCase() : char))
		.join("");
	return { title };
};

export default async function DashboardLayout({ children }: { children: ReactNode }) {
	const { user } = await getUser();
	if (!user) {
		return redirect("/signin", "replace");
	}
	const [{ data: personalities }, { data: subscriptions }] = await Promise.all([
		getPersonalities(),
		getSubscriptions()
	]);
	const initialState: Partial<State> = {
		notification: user.user_metadata.notification,
		userAvatar: user?.user_metadata.image,
		userPlan: user.user_metadata.subscription,
		personalities: personalities,
		subscriptions: subscriptions
	};
	return <Provider initialState={initialState}>{children}</Provider>;
}
