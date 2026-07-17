import { useState } from "react";
import Button from "../button/Button";
import ArrowRight from "../icons/arrow-right";
import Premium from "../icons/premium";
import PlansModal from "../modal/PlansModal";
import { useDashboardContext } from "@/contexts/DashboardContext";

export default function SidebarUpgrade() {
	const { isCollapsed } = useDashboardContext();
	const [isPlansModalOpen, setIsPlansModalOpen] = useState(false);
	const closeModal = () => setIsPlansModalOpen(false);

	return (
		<>
			<PlansModal open={isPlansModalOpen} onClose={closeModal} />
			<div className={`transition-all duration-400 overflow-visible self-center ${isCollapsed ? "" : "hidden"}`}>
				<Button
					variant="solid"
					className="p-10! rounded-[1rem]! *:size-28 max-xl:*:size-24 max-lg:*:size-20 bg-typo-main-white! text-icon-purple! hover:bg-icon-purple! hover:text-typo-main-white! hover:scale-115 active:brightness-80! duration-400! self-center overflow-hidden"
					onClick={() => setIsPlansModalOpen(true)}
				>
					<Premium />
				</Button>
			</div>
			<div className={`transition-all duration-400 overflow-hidden ${isCollapsed ? "hidden" : ""}`}>
				<div className="relative rounded-[2rem] max-xl:rounded-[1.6rem] max-lg:rounded-[1.2rem] overflow-hidden select-none">
					<div className="absolute w-213 max-xl:w-180 max-lg:w-150 h-237 max-xl:h-200 max-lg:h-170 -top-142 max-xl:-top-120 max-lg:-top-100 -right-60 max-xl:-right-50 max-lg:-right-40 rounded-full bg-linear-135 from-white/20 from-0% via-white/2 via-94% to-white/0 to-100% z-0!"></div>
					<div className="absolute w-272 max-xl:w-230 max-lg:w-190 h-297 max-xl:h-250 max-lg:h-210 -bottom-180 max-xl:-bottom-150 max-lg:-bottom-120 -left-175 max-xl:-left-145 max-lg:-left-120 rounded-full bg-linear-135 from-white/20 from-0% to-white/0 to-100% z-0!"></div>
					<div className="flex flex-col items-center px-29 max-xl:px-24 max-lg:px-20 py-32 max-xl:py-28 max-lg:py-24 bg-icon-purple z-10! **:z-10!">
						<div className="bg-typo-main-white text-icon-purple p-10 max-xl:p-9 max-lg:p-8 rounded-[1rem] max-xl:rounded-[0.85rem] max-lg:rounded-[0.7rem] *:size-28 max-xl:*:size-24 max-lg:*:size-20">
							<Premium />
						</div>
						<p className="text-[1.8rem] max-xl:text-[1.6rem] max-lg:text-[1.4rem] leading-[1.8] mt-10 max-xl:mt-9 max-lg:mt-8 font-semibold text-nowrap">
							Upgrade to Plus
						</p>
						<p className="text-[1.085rem] max-xl:text-[1rem] max-lg:text-[0.9rem] text-center mt-10 max-xl:mt-9 max-lg:mt-8 text-nowrap">
							Unlock powerful features <br /> with our upgrade today!
						</p>
						<Button
							variant="solid"
							className="text-[1.2rem]! max-xl:text-[1.1rem]! max-lg:text-[1rem]! text-nowrap bg-typo-main-white! text-icon-purple! hover:bg-icon-purple! hover:text-typo-main-white! border-1 hover:scale-115 active:brightness-80! mt-30 max-xl:mt-26 max-lg:mt-22 duration-400!"
							onClick={() => setIsPlansModalOpen(true)}
						>
							Upgrade now
							<ArrowRight className="size-18 max-xl:size-16 max-lg:size-14" />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
