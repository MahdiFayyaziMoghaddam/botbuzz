import ArrowLeftDown from "../icons/arrow-left-down";
import "./Accordion.css";

interface Accordion {
	count?: number | string;
	question?: string;
	answer?: string;
}

export default function Accordion({ answer = "", count = 1, question = "" }: Accordion) {
	return (
		<div className="border-b border-typo-dark-gray appearance-none py-[3.2rem]">
			<details className="group overflow-hidden">
				<summary className="grid grid-cols-[2.7rem_1fr_3.2rem] gap-[5.5rem] py-[1.6rem] cursor-pointer marker:hidden  px-[2.4rem] select-none overflow-hidden rounded-lg">
					<p className="text-[2rem] font-semibold group-open:text-btn-purple duration-300">{count}</p>
					<p className="text-[2.2rem] font-semibold text-left line-clamp-1 group-open:text-btn-purple duration-300">
						{question}
					</p>
					<ArrowLeftDown className="-rotate-180 transition-transform duration-300 group-open:rotate-0 size-[3.2rem] text-icon-blue" />
				</summary>

				<div className="grid grid-cols-[2.7rem_1fr_3.2rem] gap-[5.5rem] pt-[0.8rem] px-[2.4rem]">
					<p className="col-start-2 col-end-3">{answer}</p>
				</div>
			</details>
		</div>
	);
}
