"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import TopbarSelect from "./TopbarSelect";
import Logout from "../icons/logout";
import Person from "../icons/person";
import { signout } from "@/auth/actions";
import Warning from "../icons/warning";
import Feedback from "../icons/feedback";
import { useDashboardContext } from "@/contexts/DashboardContext";
import Menu from "../icons/menu";

export default function Topbar({ AvatarElement }: { AvatarElement: ReactNode }) {
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
					{AvatarElement}
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
