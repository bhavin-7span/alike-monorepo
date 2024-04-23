import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import graphql from "@rollup/plugin-graphql";
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command, mode }) => {

  console.log("================"+mode+"================")
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [vue(), VueDevTools(), graphql()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@root": path.resolve(__dirname, "./"),
      },
      extensions: [".mjs", ".js", ".jsx", ".json", ".vue", ".scss"],
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
    },
    server: {
      host: "localhost",
      port: 8080,
    },
  };
});
