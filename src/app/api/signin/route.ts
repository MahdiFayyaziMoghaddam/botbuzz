import { createAuthClient } from "@/lib/supabase";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const { email, password } = await req.json();

	const supabase = await createAuthClient();
	const { data, error } = await supabase.auth.signInWithPassword({ email, password });
	if (error) {
		return Response.json({ name: error.name, message: error.message }, { status: error.status });
	}
	return Response.json({ data });
}
