"use server";

import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { createStreamableValue } from "@ai-sdk/rsc";

const model = google("gemini-3.5-flash");

export async function chat(prompt: string) {
	const stream = createStreamableValue();
	const { textStream } = streamText({ model, prompt, headers: {} });
	for await (const text of textStream) {
		stream.update(text);
	}
	stream.done();
	return { stream: stream.value };
}
