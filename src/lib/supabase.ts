import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { env } from "@/utils/env";

export const createAuthClient = async () => {
	const { SUPABASE_URL, SUPABASE_KEY } = env();
	const cookieStore = await cookies();
	return createServerClient(SUPABASE_URL, SUPABASE_KEY, {
		cookies: {
			getAll() {
				return cookieStore.getAll();
			},
			setAll(cookiesToSet) {
				try {
					cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
				} catch {
					// The `setAll` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			}
		}
	});
};

export const createDBClient = async () => {
	const { SUPABASE_URL, SUPABASE_KEY } = env();
	return createClient(SUPABASE_URL, SUPABASE_KEY, {
		auth: {
			autoRefreshToken: false,
			persistSession: false
		}
	});
};
