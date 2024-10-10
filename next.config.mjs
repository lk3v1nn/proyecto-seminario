/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.rawgit.com'],
      } ,
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
