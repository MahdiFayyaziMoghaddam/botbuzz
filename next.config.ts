import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	reactStrictMode: false,
	experimental: {
		optimizeCss: true,
		viewTransition: true
	}
};

export default nextConfig;
