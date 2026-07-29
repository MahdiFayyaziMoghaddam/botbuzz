import { Personality } from "@/types/database";

export const instructions = (personality: Personality) => {
	return `
	> When user asks about your personality, your name is "${personality.name}" ... ${personality.description}, by the way! your skills are: ${personality.skills.map((skill) => `<${skill}>`).join(", ")}.
	`.trim();
};
