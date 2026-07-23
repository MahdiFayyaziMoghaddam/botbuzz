import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";
import { getServerSidePathname } from "@/utils/getServerSidePathname";

export const generateMetadata = async () => {
	const title = (await getServerSidePathname())
		.split("")
		.slice(1)
		.map((char, i) => (i === 0 ? char.toUpperCase() : char))
		.join("");
	return { title };
};

export default async function AuthLayout({ children }: { children: ReactNode }) {
	const { user, error } = await getUser();
	if (user && !error) {
		return redirect("/chat", "replace");
	}
	return (
		<div className="grid grid-cols-[30vw_51vw] max-lg:grid-cols-1 justify-between items-start bg-onboarding py-[2.2vw] px-[4.4vw] min-h-dvh overflow-auto!">
			{children}
		</div>
	);
}
