import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The specialists page was removed (no staff bios); send old links to the about page.
  async redirects() {
    return [{ source: "/our-specialists", destination: "/why-rond-point", permanent: true }];
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
