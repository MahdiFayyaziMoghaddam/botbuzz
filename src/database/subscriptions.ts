"use server";

import { createDBClient } from "@/lib/supabase";
import { Subscription } from "@/types/database";
import { cache } from "react";

export const getSubscriptions = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("subscriptions").select("*");
	return { data: data as Subscription[], error };
});
