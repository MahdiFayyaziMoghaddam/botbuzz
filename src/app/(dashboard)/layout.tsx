import { ReactNode } from "react";
import Provider from "./_provider";
import { redirect } from "next/navigation";
import { getUser } from "@/auth/actions";
import "./styles.css";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
	const user = await getUser();
	if (!user) {
		return redirect("/signin", "replace");
	}
	return <Provider>{children}</Provider>;
}
