import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    qualities: [25, 50, 75, 80],
    remotePatterns: [
      new URL("https://tzvtgzwgbekmhhsbuusn.supabase.co/**"),
      new URL("https://lh3.googleusercontent.com/**"),
    ],
  },
  crossOrigin: "use-credentials",
};

export default nextConfig;
