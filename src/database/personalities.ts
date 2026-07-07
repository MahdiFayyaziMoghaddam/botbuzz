"use server";

import { createDBClient } from "@/lib/supabase";

export const getPersonalities = async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("personalities").select("*");
	return { data, error };
};
