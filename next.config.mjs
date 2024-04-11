/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eu.ui-avatars.com',
                port: '',
                pathname: '/api/**',
            },{
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
