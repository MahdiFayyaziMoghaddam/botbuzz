import Loader from "@/components/loader/Loader";

export default function Loading() {
	return (
		<div className="size-full flex justify-center items-center">
			<Loader className="text-5xl" />
		</div>
	);
}
