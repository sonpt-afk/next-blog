/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.thewall360.com'
            },
            {
                hostname: 'cdn.sanity.io'
            }
        ]
    }
};

export default nextConfig;
