import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	reactStrictMode: false,
	experimental: {
		optimizeCss: true
	}
};

export default nextConfig;
