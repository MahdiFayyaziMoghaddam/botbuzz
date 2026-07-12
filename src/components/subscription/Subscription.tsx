import Image from "../image/Image";
import Check from "../icons/check";
import Button from "../button/Button";

interface Subscription {
	imgSrc: string;
	plan: "Free" | "Plus" | "Team";
	features: string[];
	price: number;
	currentPlan?: this["plan"];
}

export default function Subscription({ features, imgSrc, plan, price, currentPlan }: Subscription) {
	return (
		<div className="flex flex-col justify-between bg-onboarding py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
			<div>
				<Image
					src={imgSrc}
					alt="free-plan"
					className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
				/>
				<h5 className="mt-[1.6rem] max-md:mt-[1.2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
					{plan}
				</h5>
				<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
					USD ${price}/month
				</p>
				<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
					{features.map((feature) => (
						<li key={feature} className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
							<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			{currentPlan === plan && (
				<Button
					variant="solid"
					className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.8rem] text-[1.2rem]! max-lg:text-[1rem]!"
					disabled
				>
					Your Current Plan
				</Button>
			)}
		</div>
	);
}
