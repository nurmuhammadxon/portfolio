import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'eu-west-2.graphassets.com',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
