import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";

export default async function AuthLayout({ children }: { children: ReactNode }) {
	const user = await getUser();
	if (user) {
		return redirect("/chat", "replace");
	}
	return children;
}
