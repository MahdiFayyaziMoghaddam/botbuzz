"use client";

import ChatBox from "@/components/dashboard/ChatBox";
import { useDashboardStore } from "@/stores/dashboardStore";

export default function Client({ conversation_id }: { conversation_id: string }) {
	const conversations = useDashboardStore((state) => state.conversations);
	const personalities = useDashboardStore((state) => state.personalities);
	const messages = useDashboardStore((state) => state.messages);
	const userInfo = useDashboardStore((state) => state.userInfo);
	const userAvatar = useDashboardStore((state) => state.userAvatar);
	const personality_id = conversations.find(({ id }) => id === conversation_id)!.personality_id;
	const personality = personalities.find(({ id }) => id === personality_id);

	return (
		<>
			{messages.map((message, index) => (
				<ChatBox
					key={`${index}-${message.created_at}`}
					role={message.role}
					date={message.created_at}
					title={message.role === "user" ? userInfo.name : personality?.name || "assistant"}
					imgSrc={message.role === "user" ? userAvatar : personality!.image}
					content={message.content}
				/>
			))}
		</>
	);
}
