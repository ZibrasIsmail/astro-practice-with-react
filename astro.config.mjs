import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://benevolent-rolypoly-32615b.netlify.app/",
  integrations: [react()],
});
