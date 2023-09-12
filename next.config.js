/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
        allowFutureImage: true,
    },
};

module.exports = nextConfig;
