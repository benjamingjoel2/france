import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The specialists page was removed (no staff bios); send old links to the about page.
  async redirects() {
    return [
      { source: "/our-specialists", destination: "/why-rond-point", permanent: true },
      // English lives at the existing URLs; /en/... is only the internal route.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
  // French, German and Spanish live under /fr, /de and /es. Every page sits under app/[locale],
  // so unprefixed paths are served from /en.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        {
          source: "/:path((?!en(?:/|$)|fr(?:/|$)|de(?:/|$)|es(?:/|$)|api(?:/|$)|_next(?:/|$)|img(?:/|$)|video(?:/|$)|downloads(?:/|$)|icon\\.svg$|robots\\.txt$|sitemap\\.xml$|favicon\\.ico$).+)",
          destination: "/en/:path",
        },
      ],
    };
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
