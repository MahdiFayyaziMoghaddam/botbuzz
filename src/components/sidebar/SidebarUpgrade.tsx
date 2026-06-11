import Button from "../button/Button";
import ArrowRight from "../icons/arrow-right";
import Premium from "../icons/premium";
import { useSidebarContext } from "./Sidebar";

export default function SidebarUpgrade() {
	const isCollapsed = useSidebarContext();
	return (
		<>
			{!isCollapsed ? (
				<div className="relative rounded-[2rem] overflow-hidden select-none">
					<div className="absolute w-213 h-237 -top-142 -right-60 rounded-full bg-linear-135 from-white/20 from-0% via-white/2 via-94% to-white/0 to-100% z-0!"></div>
					<div className="absolute w-272 h-297 -bottom-180 -left-175 rounded-full bg-linear-135 from-white/20 from-0% to-white/0 to-100% z-0!"></div>
					<div className="flex flex-col items-center px-29 py-32 bg-icon-purple z-10! **:z-10!">
						<div className="bg-typo-main-white text-icon-purple p-10 rounded-[1rem] *:size-28">
							<Premium />
						</div>
						<p className="text-[1.8rem] leading-[1.8] mt-10 font-semibold">Upgrade to Pro</p>
						<p className="text-[1.085rem] text-center mt-10">Unlock powerful features with our pro upgrade today!</p>
						<Button
							variant="solid"
							className="text-[1.2rem]! text-nowrap bg-typo-main-white! text-icon-purple! hover:bg-icon-purple! hover:text-typo-main-white! border-1 hover:scale-115 active:brightness-80! mt-30 duration-400!"
						>
							Upgrade now
							<ArrowRight className="size-18" />
						</Button>
					</div>
				</div>
			) : (
				<Button
					variant="solid"
					className="p-10! rounded-[1rem]! *:size-28 bg-typo-main-white! text-icon-purple! hover:bg-icon-purple! hover:text-typo-main-white! hover:scale-115 active:brightness-80! duration-400! self-start overflow-hidden"
				>
					<Premium />
				</Button>
			)}
		</>
	);
}
