import { createGoogle } from "@ai-sdk/google";
import { getPersonality } from "@/database/actions";
import { instructions } from "@/database/instructions";
import { createUIMessageStreamResponse, streamText, toUIMessageStream } from "ai";
import { env } from "@/utils/env";

export async function POST(req: Request) {
	const { prompt, personality_id, api_key }: { prompt: string; personality_id: string; api_key: string } =
		await req.json();

	const { GOOGLE_GENERATIVE_AI_API_KEY } = env();

	const { data, error } = await getPersonality(personality_id);
	if (error) return new Response(error.message, { status: 500 });

	try {
		const google = createGoogle({
			apiKey: api_key || GOOGLE_GENERATIVE_AI_API_KEY
		});

		const model = google("gemini-3.5-flash");

		const { stream } = streamText({
			model,
			instructions: instructions(data[0]),
			prompt
		});

		return createUIMessageStreamResponse({
			stream: toUIMessageStream({ stream })
		});
	} catch (error) {
		console.log(error);
	}
}
