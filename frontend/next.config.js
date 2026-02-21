/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['your-domain.com', 's3-alpha-sig.figma.com', 'pexels.com', 'images.pexels.com'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*', // Requests starting with /api will be proxied
				destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
