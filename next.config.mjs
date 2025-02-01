// next.config.mjs
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "1337",
          pathname: "/uploads/**",
        },
      ],
    },
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337",
    }
  };
  
  export default nextConfig; // ✅ Ubah dari `module.exports` ke `export default`
  