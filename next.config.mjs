/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "github-readme-stats.vercel.app",
        },
        {
          protocol: "https",
          hostname: "skillicons.dev",
        },
      ],
    },
  };
  
  export default nextConfig;
  