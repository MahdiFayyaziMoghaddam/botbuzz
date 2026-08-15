export function env() {
	const SUPABASE_URL = process.env.SUPABASE_URL;
	const SUPABASE_KEY = process.env.SUPABASE_KEY;
	const GOOGLE_GENERATIVE_AI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
	if (!SUPABASE_URL) {
		throw new Error("Missing SUPABASE_URL environment variable.");
	}
	if (!SUPABASE_KEY) {
		throw new Error("Missing SUPABASE_KEY environment variable.");
	}
	if (!GOOGLE_GENERATIVE_AI_API_KEY) {
		throw new Error("Missing GOOGLE_GENERATIVE_AI_API_KEY environment variable.");
	}
	return { SUPABASE_URL, SUPABASE_KEY, GOOGLE_GENERATIVE_AI_API_KEY };
}
