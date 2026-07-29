import { useDebugValue, useEffect } from "react";

export default function useDebug(label: string, data: unknown) {
	useDebugValue(label);
	useEffect(() => {
		console.log(`${label}:`, data);
	}, [data, label]);
}
