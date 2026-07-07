"use server";

import { createDBClient } from "@/lib/supabase";

export const getSubscriptions = async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("subscriptions").select("*");
	return { data, error };
};
