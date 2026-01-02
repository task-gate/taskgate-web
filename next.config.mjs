/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
