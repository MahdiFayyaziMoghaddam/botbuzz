"use client";

import ChatBox from "@/components/dashboard/ChatBox";
import { useDashboardContext } from "@/contexts/DashboardContext";

export default function Client() {
	const { state } = useDashboardContext();
	const personality = state.personalities.find(({ id }) => id === state.userPersonalityID);

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
