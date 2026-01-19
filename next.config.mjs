/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [25, 50, 75, 100],
  },
  async redirects() {
    return [
      // Redirect www to non-www (backup for middleware)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.taskgate.co",
          },
        ],
        destination: "https://taskgate.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
