export default function DateSeparator({ title }: { title?: string }) {
	return (
		<div className="flex items-center gap-8 max-sm:gap-6 max-xs:gap-5 w-full">
			<hr className="grow border-typo-dark-gray" />
			<span className="text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem] text-typo-light-gray select-none">
				{title}
			</span>
			<hr className="grow border-typo-dark-gray" />
		</div>
	);
}
