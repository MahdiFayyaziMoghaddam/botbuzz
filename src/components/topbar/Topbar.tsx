import Feedback from "../icons/feedback";
import Logout from "../icons/logout";
import Person from "../icons/person";
import Warning from "../icons/warning";
import Image from "../image/Image";
import TopbarSelect from "./TopbarSelect";
import Menu from "../icons/menu";
import { useDashboardContext } from "@/contexts/DashboardContext";

export default function Topbar() {
	const { setIsDrawerOpen } = useDashboardContext();
	return (
		<div className="flex justify-between flex-row-reverse items-center bg-[#3A3C40] border-b-2 border-glass-stroke py-18 px-24">
			<div className="flex items-center flex-row-reverse gap-40">
				<TopbarSelect
					items={[
						{ label: "Profile Details", href: "/profile", icon: <Person /> },
						{ label: "Sign out", href: "/signout", icon: <Logout /> }
					]}
				>
					<Image
						src="/images/user.png"
						alt="user-profile"
						className="relative size-48 rounded-[0.8rem] transition-colors duration-200"
					/>
				</TopbarSelect>
				<TopbarSelect>
					<Warning className="size-32" />
				</TopbarSelect>
				<TopbarSelect>
					<Feedback className="size-32" />
				</TopbarSelect>
			</div>
			<button
				className="*:size-24 rounded-[0.4rem] hover:bg-onboarding/50 cursor-pointer p-8 duration-200 outline-none md:hidden"
				onClick={() => setIsDrawerOpen(true)}
			>
				<Menu />
			</button>
		</div>
	);
}
