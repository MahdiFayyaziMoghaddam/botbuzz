import { google } from "@ai-sdk/google";
import { createUIMessageStreamResponse, streamText, toUIMessageStream } from "ai";

export async function POST(req: Request) {
	const { prompt }: { prompt: string } = await req.json();
	const model = google("gemini-3.5-flash");

	const { stream } = streamText({
		model,
		prompt
	});

	return createUIMessageStreamResponse({
		stream: toUIMessageStream({ stream })
	});
}
