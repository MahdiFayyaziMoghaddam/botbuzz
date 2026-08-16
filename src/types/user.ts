import { Subscription } from "./database";

export interface UserMetadata {
	image: string;
	name: string;
	notification: boolean;
	subscription: Subscription | null;
	apiKey: string;
}

export interface UserInfo {
	name: string;
	email: string;
	password: string;
	confirm: string;
}
