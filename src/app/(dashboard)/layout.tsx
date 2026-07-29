import { ReactNode } from "react";
import Provider from "./_provider";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";
import { getServerSidePathname } from "@/utils/getServerSidePathname";
import { State } from "@/types/reducer";
import { getConversations, getMessages, getPersonalities, getSubscriptions } from "@/database/actions";

export const generateMetadata = async () => {
	const title = (await getServerSidePathname())
		.split("")
		.slice(1)
		.map((char, i) => (i === 0 ? char.toUpperCase() : char))
		.join("");
	return { title };
};

export default async function DashboardLayout({ children }: { children: ReactNode }) {
	const pathname = await getServerSidePathname();
	const { user, error } = await getUser();
	if (!user || error) {
		return redirect("/signin", "replace");
	}
	const [{ data: personalities }, { data: subscriptions }, { data: conversations }] = await Promise.all([
		getPersonalities(),
		getSubscriptions(),
		getConversations()
	]);
	const initialState: Partial<State> = {
		notification: user.user_metadata?.notification || false,
		userAvatar: user?.user_metadata?.image || "/images/user.png",
		userPlan: user.user_metadata?.subscription || subscriptions[0] || null,
		userPersonalityID: personalities?.[0]?.id || "",
		personalities: personalities || [],
		subscriptions: subscriptions || [],
		conversations: conversations || []
	};
	// initial validation and preload for /chat/[conversation_id]
	if (pathname.startsWith("/chat") && pathname !== "/chat") {
		const conversation_id = pathname.split("chat/")[1];
		if (!conversations.find((conversation) => conversation.id === conversation_id)) redirect("/chat", "replace");
		else {
			const { data } = await getMessages(conversation_id);
			initialState.messages = data || [];
		}
	}
	return <Provider initialState={initialState}>{children}</Provider>;
}
