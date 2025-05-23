/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.sanity.io" },
            { protocol: "https", hostname: "placehold.co" },
            { protocol: "https", hostname: "images.pexels.com" },
        ],
    },
};

export default nextConfig;
