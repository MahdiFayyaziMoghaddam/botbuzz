import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export async function proxy(request: NextRequest) {
	let response = NextResponse.next({
		request: {
			headers: request.headers
		}
	});

	createServerClient(supabaseUrl!, supabaseKey!, {
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
