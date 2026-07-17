interface AutoGenerate {
	id: string;
	created_at: string;
	updated_at: string;
}

export interface Personality extends AutoGenerate {
	name: string;
	description: string;
	image: string;
	skills: string[];
}
export interface Subscription extends AutoGenerate {
	plan: "Free" | "Plus" | "Team";
	price: number;
	image: string;
	features: string[];
}
export interface Conversation extends AutoGenerate {
	user_id: string;
	personality_id: string;
	title: string;
}
export interface Message extends AutoGenerate {
	conversation_id: string;
	role: "user" | "assistant";
	content: string;
}
