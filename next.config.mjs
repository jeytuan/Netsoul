import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace "node:buffer", "node:fs", etc. with appropriate browser-compatible alternatives
      config.resolve.fallback = {
        buffer: require.resolve('buffer/'),
        fs: false, // Mock or disable fs module on the client side
        https: require.resolve('https-browserify'),
        http: require.resolve('stream-http'),
        net: false, // Mock or disable net module on the client side
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url/'),
        crypto: require.resolve('crypto-browserify'),
      };
    }
    return config;
  },
};

export default nextConfig;
