"use server";
import { createDBClient } from "@/lib/supabase";
import { Message, Personality, Subscription } from "@/types/database";
import { cache } from "react";

export const getConversations = async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("conversations").select("*");
	return { data, error };
};

export const getMessages = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("messages").select("*");
	return { data: data as Message[], error };
});

export const getPersonalities = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("personalities").select("*");
	return { data: data as Personality[], error };
});

export const getSubscriptions = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("subscriptions").select("*");
	return { data: data as Subscription[], error };
});
