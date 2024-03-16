/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/createManito/createMain",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
