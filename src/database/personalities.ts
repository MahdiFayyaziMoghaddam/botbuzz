"use server";

import { createDBClient } from "@/lib/supabase";
import { Personality } from "@/types/database";
import { cache } from "react";

export const getPersonalities = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("personalities").select("*");
	return { data: data as Personality[], error };
});
