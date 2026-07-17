export default function Loader({ className }: { className?: string }) {
	return (
		<div
			className={`size-[1.5em] animate-spin rounded-full border-[0.2em] border-glass-white border-b-white inline-block shrink-0 ${className}`}
		></div>
	);
}
