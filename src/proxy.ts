import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	const headers = new Headers(request.headers);

	headers.append("x-pathname", request.nextUrl.pathname);

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
