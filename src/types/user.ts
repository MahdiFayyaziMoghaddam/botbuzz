import { Subscription } from "./database";

export interface UserMetadata {
	image: string;
	name: string;
	notification: boolean;
	subscription: Subscription["plan"];
}
