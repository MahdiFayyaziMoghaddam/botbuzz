import { ReactNode } from "react";
import Provider from "./_provider";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";
import Image from "@/components/image/Image";
import "./styles.css";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
	const { user } = await getUser();
	if (!user) {
		return redirect("/signin", "replace");
	}
	const AvatarElement = (
		<Image
			src={user?.user_metadata.image || "/images/user.png"}
			alt="user-profile"
			className="relative size-48 max-xl:size-42 max-lg:size-36 max-md:size-32 max-sm:size-28 rounded-[0.8rem] max-xl:rounded-[0.7rem] max-lg:rounded-[0.6rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] transition-colors duration-200 bg-typo-dark-gray"
			unoptimized
		/>
	);
	return <Provider AvatarElement={AvatarElement}>{children}</Provider>;
}
