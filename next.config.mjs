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
  };
  
  export default nextConfig; // ✅ Ubah dari `module.exports` ke `export default`
  