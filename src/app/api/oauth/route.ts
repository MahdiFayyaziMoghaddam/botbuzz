import { createAuthClient } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);

	const code = url.searchParams.get("code");
	const next = url.searchParams.get("next") ?? "/chat";

	if (code) {
		const supabase = await createAuthClient();
		await supabase.auth.exchangeCodeForSession(code);
	}

	return NextResponse.redirect(new URL(next, request.url));
}
