"use server";

import { createDBClient } from "@/lib/supabase";

export const getMessages = async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("messages").select("*");
	return { data, error };
};
