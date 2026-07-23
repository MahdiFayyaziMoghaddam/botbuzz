"use server";
import { getUser } from "@/auth/actions";
import { createDBClient } from "@/lib/supabase";
import { Conversation, Message, Personality, Subscription } from "@/types/database";
import { cache } from "react";

export const getConversations = async () => {
	const supabase = await createDBClient();
	const { user } = await getUser();
	const id = user!.id;
	const { data, error } = await supabase.from("conversations").select("*").eq("user_id", id);
	return { data: data as Conversation[], error };
};

export const removeConversation = async (id: string) => {
	const supabase = await createDBClient();
	const { error } = await supabase.from("conversations").delete().eq("id", id);
	return { error };
};

export const getMessages = cache(async (conversationId: string) => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("messages").select("*").eq("conversation_id", conversationId);
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
