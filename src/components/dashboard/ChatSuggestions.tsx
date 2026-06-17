export default function ChatSuggestions({ items }: { items?: string[] }) {
	return (
		<>
			{items && (
				<div className="flex flex-wrap justify-start items-center gap-16 max-lg:gap-13 max-md:gap-10 max-sm:gap-7 max-xs:gap-4 w-full">
					{items.map((item) => (
						<button
							key={item}
							className="border-1 border-btn-purple rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem] px-16 max-lg:px-13 max-md:px-10 max-sm:px-7 max-xs:px-4 py-12 max-lg:py-10 max-md:py-8 max-sm:py-6 max-xs:py-3 cursor-pointer outline-none hover:bg-btn-purple/20 duration-200 text-btn-purple text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.8rem] max-xs:text-[0.8rem] text-left text-nowrap"
						>
							{item}
						</button>
					))}
				</div>
			)}
		</>
	);
}
