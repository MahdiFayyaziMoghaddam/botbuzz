import { createClient } from "@/libs/supabase";
import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const { email, password, name } = await req.json();
	const cookie = await cookies();
	const supabase = createClient(cookie);
	const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
	if (error) {
		return Response.json({ error: { name: error.name, message: error.message } }, { status: error.status });
	}
	return Response.json({ data });
}
