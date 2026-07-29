import ChatFooter from "@/components/dashboard/ChatFooter";
import React from "react";

export default async function ChatLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="relative flex flex-col overflow-hidden">
				<div className="flex flex-col px-194 max-xl:px-130 max-lg:px-80 max-md:px-60 max-sm:px-30 max-xs:px-20 gap-32 max-lg:gap-28 max-md:gap-24 max-sm:gap-20 max-xs:gap-16 my-24 max-lg:my-20 max-md:my-16 max-sm:my-12 max-xs:my-10 shrink overflow-auto h-full">
					{children}
				</div>
				<ChatFooter />
			</div>
		</>
	);
}
