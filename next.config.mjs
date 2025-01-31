/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/sitemap.xml',
            destination: '/api/sitemap', // The API route we just created
          },
        ];
      },
  };
  
  export default nextConfig;