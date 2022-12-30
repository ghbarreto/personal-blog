/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
};
