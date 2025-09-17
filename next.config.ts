import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    qualities: [25, 50, 75, 80],
    remotePatterns: [new URL("https://tzvtgzwgbekmhhsbuusn.supabase.co/**")],
  },
};

export default nextConfig;
