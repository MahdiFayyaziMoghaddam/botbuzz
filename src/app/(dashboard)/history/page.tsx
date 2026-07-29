"use client";
import DateSeparator from "@/components/dashboard/DateSeparator";
import HistoryLink, { HistoryModel } from "@/components/dashboard/History";
import Error from "@/components/icons/error";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { Conversation } from "@/types/database";
import { Fragment } from "react";

function DateFormatter(date: string) {
	const dateObject = new Date(date);
	return dateObject.toLocaleDateString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: dateObject.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined
	});
}

export default function History() {
	const { state } = useDashboardContext();
	return (
		<div className="relative flex flex-col overflow-hidden">
			{state.conversations.length === 0 ? (
				<EmptyHistory />
			) : (
				<div className="flex flex-col px-194 max-xl:px-130 max-lg:px-80 max-md:px-60 max-sm:px-30 max-xs:px-20 gap-42 max-lg:gap-28 max-md:gap-24 max-sm:gap-20 max-xs:gap-16 shrink overflow-auto h-full *:shrink-0 py-24 max-lg:py-20 max-md:py-16 max-sm:py-12 max-xs:py-10">
					{[...new Set(state.conversations.map(({ created_at }) => DateFormatter(created_at)))].map(
						(formatted_created_at) => (
							<Fragment key={formatted_created_at}>
								<DateSeparator title={formatted_created_at} />
								{[
									...new Set(
										state.conversations.reduce(
											(prev: string[], current) =>
												DateFormatter(current.created_at) === formatted_created_at
													? [...prev, current.personality_id]
													: prev,
											[]
										)
									)
								].map((personality_id) => (
									<div key={personality_id} className="flex flex-col gap-16">
										<HistoryModel
											title={state.personalities.find(({ id }) => id === personality_id)?.name || "assistant"}
											imgSrc={
												state.personalities.find(({ id }) => id === personality_id)?.image || "/images/favicon.png"
											}
											date={formatted_created_at}
										/>
										{[
											...new Set(
												state.conversations.reduce((prev: Conversation[], current: Conversation) => {
													if (
														current.personality_id === personality_id &&
														DateFormatter(current.created_at) === formatted_created_at
													)
														return [...prev, current];
													else return prev;
												}, [])
											)
										].map(
											(conversation) =>
												conversation.personality_id === personality_id &&
												DateFormatter(conversation.created_at) === formatted_created_at && (
													<HistoryLink
														key={conversation.id}
														id={conversation.id}
														href={`/chat/${conversation.id}`}
														title={conversation.title}
													/>
												)
										)}
									</div>
								))}
							</Fragment>
						)
					)}
				</div>
			)}
		</div>
	);
}

function EmptyHistory() {
	return (
		<div className="flex flex-col justify-center items-center h-full gap-8 max-lg:gap-7 max-md:gap-6 max-sm:gap-5 max-xs:gap-4">
			<Error className="size-50 max-xl:size-47 max-lg:size-43 max-md:size-39 max-sm:size-35 max-xs:size-31 text-btn-purple" />
			<p className="text-center text-[1.6rem] max-xl:text-[1.5rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
				No chat history yet
			</p>
			<p className="text-center text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem] text-typo-medium-gray">
				Start chatting with your AI personality
			</p>
		</div>
	);
}
