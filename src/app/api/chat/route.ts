import { google } from "@ai-sdk/google";
import { getPersonality } from "@/database/actions";
import { instructions } from "@/database/instructions";
import { createUIMessageStreamResponse, streamText, toUIMessageStream } from "ai";

export async function POST(req: Request) {
	const { prompt, personality_id }: { prompt: string; personality_id: string } = await req.json();

	const { data, error } = await getPersonality(personality_id);
	if (error) return new Response(error.message, { status: 500 });

	try {
		const model = google("gemini-3.5-flash");

		const { stream } = streamText({
			model,
			instructions: instructions(data[0]),
			prompt
		});

		return createUIMessageStreamResponse({
			stream: toUIMessageStream({ stream })
		});
	} catch {}
}
