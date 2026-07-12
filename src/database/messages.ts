"use server";

import { createDBClient } from "@/lib/supabase";
import { Message } from "@/types/database";
import { cache } from "react";

export const getMessages = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("messages").select("*");
	return { data: data as Message[], error };
});
