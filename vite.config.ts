import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { closeBundle } from "./publish.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), { closeBundle, name: "publish" }]
});
