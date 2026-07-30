import I, { ImageProps } from "next/image";

export default function Image({ src, alt, className = "relative size-40", ...props }: ImageProps) {
	return (
		<div className={`overflow-hidden ${className}`}>
			<I className="object-cover select-none" src={src} alt={alt} fill sizes="100" {...props} />
		</div>
	);
}
