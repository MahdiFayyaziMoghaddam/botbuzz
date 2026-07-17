import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";

export default async function AuthLayout({ children }: { children: ReactNode }) {
	const { user } = await getUser();
	if (user) {
		return redirect("/chat", "replace");
	}
	return (
		<div className="grid grid-cols-[30vw_51vw] max-lg:grid-cols-1 justify-between items-start bg-onboarding py-[2.2vw] px-[4.4vw] min-h-dvh overflow-auto!">
			{children}
		</div>
	);
}
