/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false, // Mock or disable fs module on the client side
          path: false, // Mock or disable path module on the client side
          // Add other Node modules here if necessary
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  