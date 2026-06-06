// "use client";
import I from "next/image";

interface Image {
	src: string;
	alt: string;
	className?: string;
	loading?: "eager" | "lazy";
	quality?: number | `${number}`;
}

export default function Image({ src, alt, className = "relative size-40", ...props }: Image) {
	return (
		<div className={`overflow-hidden ${className}`}>
			<I className="object-cover select-none" src={src} alt={alt} fill sizes="100" {...props} />
		</div>
	);
}
