import { ModalProps } from "@/types/modal";
import Modal from "./Modal";
import Image from "../image/Image";
import Check from "../icons/check";
import Button from "../button/Button";
import { getSubscriptions } from "@/database/subscriptions";
import { useEffect, useState } from "react";
import { Subscription } from "@/types/database";
import { getUser } from "@/auth/actions";

export default function PlansModal({ open = false, onClose }: ModalProps) {
	const [data, setData] = useState<Subscription[]>([]);
	const [plan, setPlan] = useState<Subscription["plan"]>("Free");
	useEffect(() => {
		getSubscriptions().then(({ data: subscriptions }) => setData(subscriptions));
		getUser().then(({ user }) => setPlan(user?.user_metadata.subscription));
	}, []);
	return (
		<Modal open={open} onClose={onClose}>
			<div className="py-40 max-xl:py-35 max-lg:py-30 max-md:py-24 max-sm:py-20 max-xs:py-16 px-45 max-xl:px-38 max-lg:px-30 max-md:px-22 max-sm:px-18 max-xs:px-14 bg-glass-white backdrop-blur-[37px] max-lg:backdrop-blur-[25px] max-md:backdrop-blur-[18px] rounded-[2rem] max-xl:rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] max-sm:rounded-[0.6rem] max-xs:rounded-[0.5rem] overflow-auto">
				<div className="flex justify-between items-center mb-32 max-xl:mb-28 max-lg:mb-24 max-md:mb-18 max-sm:mb-14 max-xs:mb-10">
					<h5>Upgrade Your Plan</h5>
					<button
						className="flex justify-center items-center size-32 max-xl:size-28 max-lg:size-24 max-md:size-20 max-sm:size-16 max-xs:size-14 cursor-pointer text-[3.6rem] max-xl:text-[3.2rem] max-lg:text-[2.8rem] max-md:text-[2.4rem] max-sm:text-[2rem] max-xs:text-[1.8rem] select-none outline-none"
						onClick={onClose}
					>
						&times;
					</button>
				</div>
				<div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[3.2rem] max-lg:gap-[2.4rem] max-md:gap-[1.6rem] max-lg:pr-4 max-lg:max-h-490 max-md:max-h-400 max-sm:max-h-410 max-xs:max-h-385 overflow-auto">
					<div className="flex flex-col justify-between bg-onboarding py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
						<div>
							<Image
								src="/images/free-plan.png"
								alt="free-plan"
								className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
							/>
							<h5 className="mt-[1.6rem] max-md:mt-[1.2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
								Free
							</h5>
							<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
								USD $0/month
							</p>
							<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Limited access to Multiple Personalities (3 personalities)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Basic Dynamic Suggestions
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multi-platform Integration (limited to 1 device)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multilingual Support (2 languages)
								</li>
							</ul>
						</div>

						<Button
							variant="solid"
							className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.8rem] text-[1.2rem]! max-lg:text-[1rem]!"
							disabled
						>
							Your Current Plan
						</Button>
					</div>
					<div className="flex flex-col justify-between bg-[#1E2024] py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
						<div>
							<Image
								src="/images/plus-plan.png"
								alt="plus-plan"
								className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
							/>
							<div className="flex items-center justify-between mt-[1.6rem] max-md:mt-[1.2rem]">
								<h5 className="max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
									Plus
								</h5>
								<div className="text-btn-purple border-1 py-[0.4rem] px-[0.7rem] text-[1.2rem] max-lg:text-[1rem] max-md:text-[0.8rem] p-10 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem]">
									Best Selling
								</div>
							</div>
							<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
								USD $20/month
							</p>
							<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Access to Multiple Personalities (10 personalities)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Real-time Web References (unlimited queries)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multi-platform Integration (up to 5 devices)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multilingual Support (10 languages)
								</li>
							</ul>
						</div>
						<Button
							variant="solid"
							className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-1.2rem] text-[1.2rem]! max-lg:text-[1rem]!"
						>
							Upgrade to Plus
						</Button>
					</div>
					<div className="flex flex-col justify-between bg-icon-black py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
						<div>
							<Image
								src="/images/team-plan.png"
								alt="team-plan"
								className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
							/>
							<h5 className="mt-[1.6rem] max-md:mt-[1.2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
								Team
							</h5>
							<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
								USD $40/month (per user)
							</p>
							<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Advanced Generated Images (limited to 100 images/month for the team)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multilingual Support (15 languages)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Advanced Feedback Mechanism
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Collaborative conversation features for team projects
								</li>
							</ul>
						</div>

						<Button
							variant="solid"
							className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-1.2rem] text-[1.2rem]! max-lg:text-[1rem]!"
						>
							Upgrade to Team
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
}
