"use client";
import DateSeparator from "@/components/dashboard/DateSeparator";
import HistoryLink, { HistoryModel } from "@/components/dashboard/History";
import { useDashboardContext } from "@/contexts/DashboardContext";

export default function History() {
	const { state } = useDashboardContext();
	return (
		<div className="relative flex flex-col overflow-hidden">
			<div className="flex flex-col px-194 max-xl:px-130 max-lg:px-80 max-md:px-60 max-sm:px-30 max-xs:px-20 gap-42 max-lg:gap-28 max-md:gap-24 max-sm:gap-20 max-xs:gap-16 shrink overflow-auto h-full *:shrink-0 py-24 max-lg:py-20 max-md:py-16 max-sm:py-12 max-xs:py-10">
				{[...new Set(state.conversations.map(({ created_at }) => created_at))].map((created_at) => (
					<>
						<DateSeparator
							key={created_at}
							title={new Date(created_at).toLocaleDateString(undefined, {
								weekday: "long",
								month: "long",
								day: "numeric",
								year: new Date(created_at).getFullYear() !== new Date().getFullYear() ? "numeric" : undefined
							})}
						/>
						{[
							...new Set(
								state.conversations.reduce(
									(prev: string[], current) =>
										new Date(current.created_at).toDateString() === new Date(created_at).toDateString()
											? [...prev, current.personality_id]
											: prev,
									[]
								)
							)
						].map((personality_id) => (
							<>
								<div className="flex flex-col gap-16">
									<HistoryModel
										key={personality_id}
										title={state.personalities.find(({ id }) => id === personality_id)?.name || "bot"}
										imgSrc={state.personalities.find(({ id }) => id === personality_id)?.image || "/images/favicon.png"}
										date={new Date(created_at).toLocaleTimeString()}
									/>
									{state.conversations.map(
										(conversation) =>
											conversation.personality_id === personality_id &&
											new Date(conversation.created_at).toDateString() === new Date(created_at).toDateString() && (
												<HistoryLink
													key={conversation.id}
													id={conversation.id}
													href={`/chat/${conversation.id}`}
													title={conversation.title}
												/>
											)
									)}
								</div>
							</>
						))}
					</>
				))}
			</div>
		</div>
	);
}
