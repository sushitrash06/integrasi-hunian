// next.config.mjs
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "103.150.117.209",
          port: "1337",
          pathname: "/uploads/**",
        },
      ],
    },
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://103.150.117.209:1337",
    }
  };
  
  export default nextConfig;
  