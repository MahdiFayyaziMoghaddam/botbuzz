"use client";
import Image from "../image/Image";
import Trash from "../icons/trash";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { useRouter } from "next/navigation";
import { staticImages } from "../image/staticImages";

interface HistoryModel {
	imgSrc?: string;
	title?: string;
	date?: string;
}

export function HistoryModel({ date, imgSrc, title }: HistoryModel) {
	return (
		<div className="flex items-center gap-8 max-xl:gap-7 max-lg:gap-6 max-md:gap-5 max-sm:gap-4 max-xs:gap-3">
			<Image
				src={staticImages[`${imgSrc}`] || staticImages.default}
				alt="model"
				className="relative size-32 max-xl:size-30 max-lg:size-28 max-md:size-24 max-sm:size-20 max-xs:size-18 rounded-[0.8rem] max-xl:rounded-[0.75rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem] flex items-center justify-center shrink-0"
			/>
			<span className="font-semibold text-[1.6rem] max-xl:text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem] text-btn-purple select-none">
				{title}
			</span>
			<span className="text-[0.9rem] max-xl:text-[0.85rem] max-lg:text-[0.8rem] max-md:text-[0.7rem] max-sm:text-[0.65rem] max-xs:text-[0.6rem] text-typo-light-gray select-none">
				{date}
			</span>
		</div>
	);
}

interface HistoryLink {
	id: string;
	title?: string;
	href: string;
}

export default function HistoryLink({ href, title, id }: HistoryLink) {
	const { removeConversationAction, updateMessagesAction } = useDashboardContext();
	const router = useRouter();
	const onDelete = () => {
		removeConversationAction(id);
	};
	return (
		<div className="flex items-center gap-16 max-xl:gap-14 max-lg:gap-12 max-md:gap-10 max-sm:gap-8 max-xs:gap-6 pr-16 max-xl:pr-14 max-lg:pr-12 max-md:pr-10 max-sm:pr-8 max-xs:pr-6 bg-glass-white border-1 border-glass-stroke rounded-[0.8rem] max-xl:rounded-[0.7rem] max-lg:rounded-[0.6rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] max-xs:rounded-[0.35rem]">
			<button
				className="text-left cursor-pointer grow p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-8 max-xs:p-6 text-[1.6rem] max-xl:text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem]"
				onClick={async () => {
					const conversation_id = href.split("chat/")[1];
					const { completed } = await updateMessagesAction(conversation_id);
					if (completed) {
						router.replace(href);
					}
				}}
			>
				{title}
			</button>
			<button
				className="*:size-20 max-xl:*:size-18 max-lg:*:size-17 max-md:*:size-16 max-sm:*:size-14 max-xs:*:size-13 text-typo-medium-gray hover:text-error cursor-pointer outline-none duration-300 shrink-0"
				onClick={onDelete}
			>
				<Trash />
			</button>
		</div>
	);
}
