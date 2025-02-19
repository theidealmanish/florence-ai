/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cells4life.com',
			},
			{
				protocol: 'https',
				hostname: 'www.mercy.net',
			},
		],
	},
};

module.exports = nextConfig;
