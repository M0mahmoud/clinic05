import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true, // This will skip TypeScript errors in the build process
    },
};

export default withNextIntl(nextConfig);
