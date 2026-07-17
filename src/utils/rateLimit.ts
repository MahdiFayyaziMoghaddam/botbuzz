const store = new Map<string, { count: number; timeoutID: NodeJS.Timeout | null }>();

/**
 * @description rate limit function just for fun :)
 */
export function rateLimit(key: string) {
	const LIMIT = 7;
	const TIMEOUT = 20_000;
	const entry = store.get(key) ?? { count: 0, timeoutID: null };

	if (entry.count >= LIMIT) return "Too many requests, Please try again later";

	if (entry.timeoutID) clearTimeout(entry.timeoutID);

	store.set(key, {
		count: entry.count + 1,
		timeoutID: setTimeout(() => {
			store.set(key, { count: 0, timeoutID: null });
		}, TIMEOUT)
	});
}
