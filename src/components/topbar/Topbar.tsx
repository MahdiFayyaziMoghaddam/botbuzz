import Feedback from "../icons/feedback";
import Logout from "../icons/logout";
import Person from "../icons/person";
import Warning from "../icons/warning";
import Image from "../image/Image";
import TopbarSelect from "./TopbarSelect";
import Menu from "../icons/menu";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { usePathname } from "next/navigation";
import { signout } from "@/auth/actions";

export default function Topbar() {
	const pathname = usePathname();
	const { setIsDrawerOpen } = useDashboardContext();
	return (
		<div className="flex justify-between flex-row-reverse items-center bg-[#3A3C40] border-b-2 border-glass-stroke py-18 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 px-24 max-xl:px-20 max-lg:px-16 max-md:px-12 max-sm:px-10">
			<div className="flex items-center flex-row-reverse gap-40 max-xl:gap-34 max-lg:gap-28 max-md:gap-20 max-sm:gap-16 *:*:*:nth-[2]:text-error **:z-10">
				<TopbarSelect
					items={[
						{ label: "Profile Details", href: "/profile", icon: <Person /> },
						{
							label: "Sign out",
							href: pathname,
							icon: <Logout />,
							onClick: () => signout()
						}
					]}
				>
					<Image
						src="/images/user.png"
						alt="user-profile"
						className="relative size-48 max-xl:size-42 max-lg:size-36 max-md:size-32 max-sm:size-28 rounded-[0.8rem] max-xl:rounded-[0.7rem] max-lg:rounded-[0.6rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] transition-colors duration-200"
					/>
				</TopbarSelect>
				<TopbarSelect>
					<Warning className="size-32 max-xl:size-28 max-lg:size-24 max-md:size-20 max-sm:size-18" />
				</TopbarSelect>
				<TopbarSelect>
					<Feedback className="size-32 max-xl:size-28 max-lg:size-24 max-md:size-20 max-sm:size-18" />
				</TopbarSelect>
			</div>
			<button
				className="*:size-24 max-md:*:size-20 max-sm:*:size-18 rounded-[0.4rem] cursor-pointer outline-none md:hidden"
				onClick={() => setIsDrawerOpen(true)}
			>
				<Menu />
			</button>
		</div>
	);
}
