import DateSeparator from "@/components/dashboard/DateSeparator";
import HistoryLink, { HistoryModel } from "@/components/dashboard/History";

export default function History() {
	return (
		<div className="relative flex flex-col overflow-hidden">
			<div className="flex flex-col px-194 max-xl:px-130 max-lg:px-80 max-md:px-60 max-sm:px-30 max-xs:px-20 gap-42 max-lg:gap-28 max-md:gap-24 max-sm:gap-20 max-xs:gap-16 shrink overflow-auto h-full *:shrink-0 py-24 max-lg:py-20 max-md:py-16 max-sm:py-12 max-xs:py-10">
				<DateSeparator title="Today" />
				<div className="flex flex-col gap-16">
					<HistoryModel title="Chat" date="05:12 PM" />
					<HistoryLink href="/history" title="Tell me some UI/UX Design Ideas" />
				</div>
				<DateSeparator title="Yesterday" />
				<div className="flex flex-col gap-16">
					<HistoryModel title="Chat" date="05:12 PM" />
					<HistoryLink href="/history" title="Design Inspiration Resources" />
					<HistoryLink href="/history" title="How do you approach designing for accessibility in UI?" />
				</div>
			</div>
		</div>
	);
}
