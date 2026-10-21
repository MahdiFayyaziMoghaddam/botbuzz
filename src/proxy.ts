import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const headers = new Headers(request.headers);
	headers.append("x-pathname", pathname);

	const cookieStore = await cookies();
	const isUserLoggedIn = cookieStore.getAll().some((cookie) => /sb-*/.test(cookie.name));
	const isUnprotectedPathname = pathname === "/signin" || pathname === "/signup" || pathname === "/";

	if (!isUserLoggedIn && !isUnprotectedPathname) {
		return NextResponse.redirect(new URL("/signin", request.url), {
			headers
		});
	}

	const response = NextResponse.next({
		request: {
			headers
		}
	});

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"]
};
