"use server";

import { createClient } from "@/libs/supabase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signout = async () => {
	const cookie = await cookies();
	const supabase = createClient(cookie);
	await supabase.auth.signOut();
	return redirect("/signin", "replace");
};
