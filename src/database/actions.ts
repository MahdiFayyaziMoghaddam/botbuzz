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

export const addConversation = async (personality_id: string, title?: string) => {
	const supabase = await createDBClient();
	const {
		user: { id: user_id }
	} = await getUser();
	const { error, data } = await supabase
		.from("conversations")
		.insert({ user_id, personality_id, title: title || `Conversation ${new Date().toLocaleString()}` })
		.select()
		.single();
	return { error, data: data as Conversation };
};

export const removeConversation = async (id: string) => {
	const supabase = await createDBClient();
	const { error: messageError } = await supabase.from("messages").delete().eq("conversation_id", id);
	if (messageError) return { error: messageError };
	const { error: conversationError } = await supabase.from("conversations").delete().eq("id", id);
	return { error: conversationError };
};

export const getMessages = async (conversationId: string) => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("messages").select("*").eq("conversation_id", conversationId);
	return { data: data as Message[], error };
};

export const addMessage = async (conversationId: string, role: "user" | "assistant", content: string) => {
	if (!content) return { error: new Error("Content cannot be empty") };
	const supabase = await createDBClient();
	const { data, error } = await supabase
		.from("messages")
		.insert({ conversation_id: conversationId, role, content })
		.select()
		.single();
	return { error, data };
};

export const getPersonalities = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("personalities").select("*");
	return { data: data as Personality[], error };
});

export const getPersonality = cache(async (id: string) => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("personalities").select("*").eq("id", id);
	return { data: data as Personality[], error };
});

export const getSubscriptions = cache(async () => {
	const supabase = await createDBClient();
	const { data, error } = await supabase.from("subscriptions").select("*");
	return { data: data as Subscription[], error };
});
