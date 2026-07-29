import { useEffect, useRef } from "react";
import { Id, toast } from "react-toastify";

export default function useLoadingToast(content: string, isLoading: boolean) {
	const toastId = useRef<Id | null>(null);

	useEffect(() => {
		if (isLoading && content) {
			toastId.current = toast.loading(content);
		} else {
			if (toastId.current) {
				toast.dismiss(toastId.current);
				toastId.current = null;
			}
		}

		return () => {
			if (toastId.current) {
				toast.dismiss(toastId.current);
			}
		};
	}, [isLoading, content]);

	return toastId;
}
