"use client";

import ChatBox from "@/components/dashboard/ChatBox";
import { useDashboardContext } from "@/contexts/DashboardContext";

export default function Client({ conversation_id }: { conversation_id: string }) {
	const { state } = useDashboardContext();
	const personality_id = state.conversations.find(({ id }) => id === conversation_id)!.personality_id;
	const personality = state.personalities.find(({ id }) => id === personality_id);

	return (
		<>
			{state.messages.map((message) => (
				<ChatBox
					key={crypto.randomUUID()}
					role={message.role}
					date={message.created_at}
					title={message.role === "user" ? state.userInfo.name : personality?.name || "assistant"}
					imgSrc={message.role === "user" ? state.userAvatar : personality?.image || "/images/favicon.png"}
					content={message.content}
				/>
			))}
		</>
	);
}
