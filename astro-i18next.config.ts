// @ts-ignore
import type { AstroI18nextConfig } from "astro-i18next"

const config: AstroI18nextConfig = {
  defaultLocale: "vi",
  locales: ["vi", "ja"],
  i18nextServer: {
    debug: true,
  },
};

export default config;