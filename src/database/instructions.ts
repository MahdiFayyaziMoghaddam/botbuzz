import { Personality } from "@/types/database";

export const instructions = (personality: Personality) => {
	return `
	Your name is "${personality.name}", ${personality.description} and your skills are: ${personality.skills.map((skill) => `<${skill}>`).join(", ")}.
	`.trim();
};
