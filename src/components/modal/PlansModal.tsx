import { ModalProps } from "@/types/modal";
import Modal from "./Modal";
import { Subscription as ISubscription } from "@/types/database";
import Subscription from "../subscription/Subscription";
import { useEffect, useState } from "react";
import { getUser } from "@/auth/actions";
import { getSubscriptions } from "@/database/subscriptions";

export default function PlansModal({ open = false, onClose }: ModalProps) {
	const [data, setData] = useState<ISubscription[]>([]);
	const [currentPlan, setCurrentPlan] = useState<ISubscription["plan"] | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getSubscriptions().then(({ data: subscriptions }) => setData(subscriptions));
		getUser().then(({ user }) => setCurrentPlan(user?.user_metadata.subscription || "Free"));
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
					{data.map(({ id, features, plan, image, price }) => (
						<Subscription
							key={id}
							plan={plan}
							imgSrc={image}
							price={price}
							features={features}
							currentPlan={currentPlan!}
							setCurrentPlan={setCurrentPlan}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
						/>
					))}
				</div>
			</div>
		</Modal>
	);
}
