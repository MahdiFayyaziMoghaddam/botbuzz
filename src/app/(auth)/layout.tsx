import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase";

export default async function AuthLayout({ children }: { children: ReactNode }) {
	const cookie = await cookies();
	const supabase = createClient(cookie);
	const {
		data: { user }
	} = await supabase.auth.getUser();
	if (user) {
		return redirect("/chat", "replace");
	}
	return children;
}
