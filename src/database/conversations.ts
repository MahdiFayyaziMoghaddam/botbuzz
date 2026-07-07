"use server";

import { createDBClient } from "@/lib/supabase";

export const getConversations = async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("conversations").select("*");
	return { data, error };
};
