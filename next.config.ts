import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [{
      pathname: "/public/assets/",
      search: ''
    }]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
