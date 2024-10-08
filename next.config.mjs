/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/Carros',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
