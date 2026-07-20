import Image from "../image/Image";
import Check from "../icons/check";
import Button from "../button/Button";
import { updateUser } from "@/auth/actions";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction } from "react";
import { useDashboardContext } from "@/contexts/DashboardContext";

interface Subscription {
	imgSrc: string;
	plan: "Free" | "Plus" | "Team";
	features: string[];
	price: number;
	isLoading?: boolean;
	setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

export default function Subscription({ features, imgSrc, plan, price, isLoading, setIsLoading }: Subscription) {
	const { state, dispatch } = useDashboardContext();
	return (
		<div
			className={`flex flex-col justify-between ${plan === "Free" ? "bg-onboarding" : plan === "Plus" ? "bg-[#1E2024]" : "bg-icon-black"} py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke`}
		>
			<div>
				<Image
					src={imgSrc}
					alt="free-plan"
					className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
					loading="lazy"
				/>
				<div className="flex items-center justify-between mt-[1.6rem] max-md:mt-[1.2rem]">
					<h5 className="max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
						{plan}
					</h5>
					{plan === "Plus" && (
						<div className="text-btn-purple border-1 py-[0.4rem] px-[0.7rem] text-[1.2rem] max-lg:text-[1rem] max-md:text-[0.8rem] p-10 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem]">
							Best Selling
						</div>
					)}
				</div>
				<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
					USD ${price}/month {plan === "Team" && "(per user)"}
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
			{state.userPlan === plan ? (
				<Button
					variant="solid"
					className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.8rem] text-[1.2rem]! max-lg:text-[1rem]!"
					isLoading={isLoading}
					disabled
				>
					Your Current Plan
				</Button>
			) : (
				<Button
					variant="solid"
					className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-1.2rem] text-[1.2rem]! max-lg:text-[1rem]!"
					disabled={isLoading}
					onClick={() => {
						const prevUserPlan = state.userPlan;
						dispatch({ type: "UPDATE_USER_PLAN", payload: plan });
						if (setIsLoading) setIsLoading(true);
						updateUser({ subscription: plan }).then(({ error }) => {
							if (setIsLoading) setIsLoading(false);
							if (error) {
								dispatch({ type: "UPDATE_USER_PLAN", payload: prevUserPlan });
								return toast.error(error);
							}
						});
					}}
				>
					Upgrade to {plan}
				</Button>
			)}
		</div>
	);
}
