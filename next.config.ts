import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    qualities: [25, 50, 75, 80],
    remotePatterns: [
      new URL(
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ),
      new URL(
        "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ),
      new URL("https://images.pexels.com/**/**"),
      new URL(
        "https://tzvtgzwgbekmhhsbuusn.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
    ],
  },
};

export default nextConfig;
