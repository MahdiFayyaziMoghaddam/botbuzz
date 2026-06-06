import ArrowLeftDown from "../icons/arrow-left-down";
import "./Accordion.css";

interface Accordion {
	count?: number | string;
	question?: string;
	answer?: string;
}

export default function Accordion({ answer = "", count = 1, question = "" }: Accordion) {
	return (
		<div
			className="border-b border-typo-dark-gray appearance-none 
		                py-[3.2rem] 
		                max-xl:py-[2.8rem] 
		                max-lg:py-[2.4rem] 
		                max-md:py-[1.8rem] 
		                max-sm:py-[1.4rem]"
		>
			<details className="group overflow-hidden">
				<summary
					className="grid grid-cols-[2.7rem_1fr_3.2rem] 
				                    max-lg:grid-cols-[2.2rem_1fr_2.6rem] 
				                    max-md:grid-cols-[1.8rem_1fr_2.2rem] 
				                    max-sm:grid-cols-[1.4rem_1fr_1.8rem]
				                    gap-[5.5rem] 
				                    max-xl:gap-[4rem] 
				                    max-lg:gap-[3rem] 
				                    max-md:gap-[2rem] 
				                    max-sm:gap-[1.2rem]
				                    py-[1.6rem] 
				                    max-lg:py-[1.3rem] 
				                    max-md:py-[1rem] 
				                    max-sm:py-[0.8rem]
				                    cursor-pointer marker:hidden 
				                    px-[2.4rem] 
				                    max-lg:px-[1.8rem] 
				                    max-md:px-[1.2rem] 
				                    max-sm:px-[0.8rem]
				                    select-none overflow-hidden rounded-[0.8rem]"
				>
					<p
						className="text-[2rem] 
					              max-xl:text-[1.8rem] 
					              max-lg:text-[1.6rem] 
					              max-md:text-[1.4rem] 
					              max-sm:text-[1.2rem]
					              font-semibold 
					              group-open:text-btn-purple 
					              transition-colors duration-300"
					>
						{count}
					</p>

					<p
						className="text-[2.2rem] 
					              max-xl:text-[2rem] 
					              max-lg:text-[1.8rem] 
					              max-md:text-[1.4rem] 
					              max-sm:text-[1.2rem]
					              max-xs:text-[1.1rem]
					              font-semibold text-left 
					              group-open:text-btn-purple 
					              transition-colors duration-300"
						title={question}
					>
						{question}
					</p>

					<ArrowLeftDown
						className="-rotate-180 transition-transform duration-300 
					                        group-open:rotate-0 
					                        size-[3.2rem] 
					                        max-xl:size-[2.8rem] 
					                        max-lg:size-[2.4rem] max-md:size-[2rem] max-sm:size-[1.6rem] text-icon-blue"
					/>
				</summary>
				<div className="grid grid-cols-[2.7rem_1fr_3.2rem] max-lg:grid-cols-[2.2rem_1fr_2.6rem] max-md:grid-cols-[1.8rem_1fr_2.2rem] max-sm:grid-cols-[1.4rem_1fr_1.8rem] gap-[5.5rem] max-xl:gap-[4rem] max-lg:gap-[3rem] max-md:gap-[2rem] max-sm:gap-[1.2rem] pt-[0.8rem] max-md:pt-[0.6rem] max-sm:pt-[0.4rem] px-[2.4rem] max-lg:px-[1.8rem] max-md:px-[1.2rem] max-sm:px-[0.8rem]">
					<p className="col-start-2 col-end-3 text-[1.6rem] max-xl:text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.9rem]">
						{answer}
					</p>
				</div>
			</details>
		</div>
	);
}
