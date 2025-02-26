const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/projects",
        destination: "http://103.150.117.209:1337/api/auth/projects",
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://103.150.117.209:1337",
  }
};
export default nextConfig;
