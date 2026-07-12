import sharp, { FormatEnum } from "sharp";

type ImageFormat = "jpeg" | "png" | "webp" | "avif" | "gif" | "tiff" | "heif" | "raw" | "jp2" | "jxl";

export interface CropOptions {
	size?: number;
	quality?: number;
	format?: "auto" | ImageFormat;
}

export async function cropToSquare(buffer: Buffer, options: CropOptions = {}): Promise<Buffer> {
	const { size = 400, quality = 85, format = "webp" } = options;

	let pipeline = sharp(buffer).resize(size, size, { fit: "cover", position: "center" });

	const outputFormat = format === "auto" ? "webp" : format;
	pipeline = pipeline.toFormat(outputFormat as keyof FormatEnum);

	if (outputFormat === "jpeg") {
		pipeline = pipeline.jpeg({ quality });
	} else if (outputFormat === "png") {
		pipeline = pipeline.png({ quality });
	} else if (outputFormat === "webp") {
		pipeline = pipeline.webp({ quality });
	} else if (outputFormat === "avif") {
		pipeline = pipeline.avif({ quality });
	}

	return pipeline.toBuffer();
}
