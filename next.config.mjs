import { hostname } from 'os';
import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(import.meta.dirname, 'src/sass')
    ],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https'
      },
    ]
  }
};

export default nextConfig;
