import path from "path";
import fs from "node:fs";
import { defineConfig } from "vite";
import { ExtKitPlugin } from "./node_modules/@sencha/extkit/ExtKitPlugin.js";

export default defineConfig(({ mode }) => {
	return {
		plugins: [ExtKitPlugin()],
		server: {
			port: 2080,
			hmr: true,
			//hmr: { protocol: "ws", host: "localhost" },
		},
		build: {
			minify: true,
			sourcemap: true,
			outDir: "./vite",
			lib: {
				entry: path.resolve(__dirname, "app.mjs"),
				fileName: (format) => `imports.${format}.js`,
				formats: ["es"],
			},
		},
	};
});
