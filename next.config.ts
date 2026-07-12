import type { NextConfig } from "next";
import { env } from "@/utils/env";

const { SUPABASE_URL } = env();

const nextConfig: NextConfig = {
	devIndicators: false,
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: SUPABASE_URL.split("//")[1],
				pathname: "/storage/v1/object/public/**"
			},
			{
				protocol: "https",
				hostname: SUPABASE_URL.split("//")[1],
				pathname: "/storage/v1/object/sign/**"
			}
		]
	},
	experimental: {
		optimizeCss: true,
		viewTransition: true,
		serverActions: {
			bodySizeLimit: "5MB"
		}
	}
};

export default nextConfig;
