import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { env } from "./utils/env";

export async function proxy(request: NextRequest) {
	const { SUPABASE_URL, SUPABASE_KEY } = env();

	const headers = new Headers(request.headers);

	headers.append("x-pathname", request.nextUrl.pathname);

	let response = NextResponse.next({
		request: {
			headers
		}
	});

	createServerClient(SUPABASE_URL, SUPABASE_KEY, {
		cookies: {
			getAll() {
				return request.cookies.getAll();
			},
			setAll(cookiesToSet) {
				cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
				response = NextResponse.next({
					request
				});
				cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
			}
		}
	});

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"]
};
