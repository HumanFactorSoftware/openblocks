// vite.config.mts
import { defineConfig } from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/node_modules/vite/dist/node/index.js";
import react from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteTsconfigPaths from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/node_modules/vite-tsconfig-paths/dist/index.mjs";
import svgrPlugin from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/node_modules/vite-plugin-svgr/dist/index.mjs";
import path from "path";
import { ensureLastSlash } from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/packages/openblocks-dev-utils/util.js";
import { buildVars } from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/packages/openblocks-dev-utils/buildVars.js";
import { globalDepPlugin } from "file:///Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/packages/openblocks-dev-utils/globalDepPlguin.js";
var __vite_injected_original_dirname = "/Users/macbook/Downloads/aqibProjs/openBlocks_ver/humanFactor/openblocks/client/packages/openblocks-sdk-workmeet";
var define = {};
buildVars.forEach(({ name, defaultValue }) => {
  define[name] = JSON.stringify(process.env[name] || defaultValue);
});
var apiBaseUrl = "http://localhost:8000";
var viteConfig = {
  define: {
    ...define,
    REACT_APP_API_HOST: JSON.stringify(apiBaseUrl),
    REACT_APP_BUNDLE_TYPE: JSON.stringify("sdk")
  },
  assetsInclude: ["**/*.md"],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "openblocks-sdk-workmeet": path.resolve(__vite_injected_original_dirname, "../openblocks/src/index.sdk"),
      "@openblocks-ee": path.resolve(__vite_injected_original_dirname, "../openblocks/src")
    }
  },
  base: ensureLastSlash(process.env.PUBLIC_URL),
  build: {
    lib: {
      formats: ["es"],
      entry: "./src/index.ts",
      name: "Openblocks",
      fileName: "openblocks-sdk-workmeet"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        chunkFileNames: "[hash].js"
      }
    },
    commonjsOptions: {
      defaultIsModuleExports: (id) => {
        if (id.indexOf("antd/lib") !== -1) {
          return false;
        }
        return "auto";
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: false
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "@primary-color": "#3377FF",
          "@link-color": "#3377FF",
          "@border-color-base": "#D7D9E0",
          "@border-radius-base": "4px"
        },
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    globalDepPlugin(["openblocks-sdk-workmeet"]),
    react({
      babel: {
        parserOpts: {
          plugins: ["decorators-legacy"]
        }
      }
    }),
    viteTsconfigPaths({
      projects: [
        "../openblocks/tsconfig.json",
        "../openblocks-comps/tsconfig.json",
        "../openblocks-design/tsconfig.json"
      ]
    }),
    svgrPlugin({
      svgrOptions: {
        exportType: "named",
        prettier: false,
        svgo: false,
        titleProp: true,
        ref: true
      }
    })
  ]
};
var vite_config_default = defineConfig(viteConfig);
export {
  vite_config_default as default,
  viteConfig
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21hY2Jvb2svRG93bmxvYWRzL2FxaWJQcm9qcy9vcGVuQmxvY2tzX3Zlci9odW1hbkZhY3Rvci9vcGVuYmxvY2tzL2NsaWVudC9wYWNrYWdlcy9vcGVuYmxvY2tzLXNka1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hY2Jvb2svRG93bmxvYWRzL2FxaWJQcm9qcy9vcGVuQmxvY2tzX3Zlci9odW1hbkZhY3Rvci9vcGVuYmxvY2tzL2NsaWVudC9wYWNrYWdlcy9vcGVuYmxvY2tzLXNkay92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hY2Jvb2svRG93bmxvYWRzL2FxaWJQcm9qcy9vcGVuQmxvY2tzX3Zlci9odW1hbkZhY3Rvci9vcGVuYmxvY2tzL2NsaWVudC9wYWNrYWdlcy9vcGVuYmxvY2tzLXNkay92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHZpdGVUc2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgc3ZnclBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGVuc3VyZUxhc3RTbGFzaCB9IGZyb20gXCJvcGVuYmxvY2tzLWRldi11dGlscy91dGlsXCI7XG5pbXBvcnQgeyBidWlsZFZhcnMgfSBmcm9tIFwib3BlbmJsb2Nrcy1kZXYtdXRpbHMvYnVpbGRWYXJzXCI7XG5pbXBvcnQgeyBnbG9iYWxEZXBQbHVnaW4gfSBmcm9tIFwib3BlbmJsb2Nrcy1kZXYtdXRpbHMvZ2xvYmFsRGVwUGxndWluXCI7XG5cbmNvbnN0IGRlZmluZSA9IHt9O1xuYnVpbGRWYXJzLmZvckVhY2goKHsgbmFtZSwgZGVmYXVsdFZhbHVlIH0pID0+IHtcbiAgZGVmaW5lW25hbWVdID0gSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnZbbmFtZV0gfHwgZGVmYXVsdFZhbHVlKTtcbn0pO1xuXG5jb25zdCBhcGlCYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcblxuZXhwb3J0IGNvbnN0IHZpdGVDb25maWc6IFVzZXJDb25maWcgPSB7XG4gIGRlZmluZToge1xuICAgIC4uLmRlZmluZSxcbiAgICBSRUFDVF9BUFBfQVBJX0hPU1Q6IEpTT04uc3RyaW5naWZ5KGFwaUJhc2VVcmwpLFxuICAgIFJFQUNUX0FQUF9CVU5ETEVfVFlQRTogSlNPTi5zdHJpbmdpZnkoXCJzZGtcIiksXG4gIH0sXG4gIGFzc2V0c0luY2x1ZGU6IFtcIioqLyoubWRcIl0sXG4gIHJlc29sdmU6IHtcbiAgICBleHRlbnNpb25zOiBbXCIubWpzXCIsIFwiLmpzXCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi50c3hcIiwgXCIuanNvblwiXSxcbiAgICBhbGlhczoge1xuICAgICAgXCJvcGVuYmxvY2tzLXNka1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL29wZW5ibG9ja3Mvc3JjL2luZGV4LnNka1wiKSxcbiAgICAgIFwiQG9wZW5ibG9ja3MtZWVcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9vcGVuYmxvY2tzL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICBiYXNlOiBlbnN1cmVMYXN0U2xhc2gocHJvY2Vzcy5lbnYuUFVCTElDX1VSTCksXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICAgIGVudHJ5OiBcIi4vc3JjL2luZGV4LnRzXCIsXG4gICAgICBuYW1lOiBcIk9wZW5ibG9ja3NcIixcbiAgICAgIGZpbGVOYW1lOiBcIm9wZW5ibG9ja3Mtc2RrXCIsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiW2hhc2hdLmpzXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICBkZWZhdWx0SXNNb2R1bGVFeHBvcnRzOiAoaWQpID0+IHtcbiAgICAgICAgaWYgKGlkLmluZGV4T2YoXCJhbnRkL2xpYlwiKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1vZGlmeVZhcnM6IHtcbiAgICAgICAgICBcIkBwcmltYXJ5LWNvbG9yXCI6IFwiIzMzNzdGRlwiLFxuICAgICAgICAgIFwiQGxpbmstY29sb3JcIjogXCIjMzM3N0ZGXCIsXG4gICAgICAgICAgXCJAYm9yZGVyLWNvbG9yLWJhc2VcIjogXCIjRDdEOUUwXCIsXG4gICAgICAgICAgXCJAYm9yZGVyLXJhZGl1cy1iYXNlXCI6IFwiNHB4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgZ2xvYmFsRGVwUGx1Z2luKFtcIm9wZW5ibG9ja3Mtc2RrXCJdKSxcbiAgICByZWFjdCh7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwYXJzZXJPcHRzOiB7XG4gICAgICAgICAgcGx1Z2luczogW1wiZGVjb3JhdG9ycy1sZWdhY3lcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHZpdGVUc2NvbmZpZ1BhdGhzKHtcbiAgICAgIHByb2plY3RzOiBbXG4gICAgICAgIFwiLi4vb3BlbmJsb2Nrcy90c2NvbmZpZy5qc29uXCIsXG4gICAgICAgIFwiLi4vb3BlbmJsb2Nrcy1jb21wcy90c2NvbmZpZy5qc29uXCIsXG4gICAgICAgIFwiLi4vb3BlbmJsb2Nrcy1kZXNpZ24vdHNjb25maWcuanNvblwiLFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBzdmdyUGx1Z2luKHtcbiAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgIGV4cG9ydFR5cGU6IFwibmFtZWRcIixcbiAgICAgICAgcHJldHRpZXI6IGZhbHNlLFxuICAgICAgICBzdmdvOiBmYWxzZSxcbiAgICAgICAgdGl0bGVQcm9wOiB0cnVlLFxuICAgICAgICByZWY6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHZpdGVDb25maWcpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5ZSxTQUFTLG9CQUFnQztBQUNsaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLGlCQUFpQjtBQUMxQixTQUFTLHVCQUF1QjtBQVBoQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFNLFNBQVMsQ0FBQztBQUNoQixVQUFVLFFBQVEsQ0FBQyxFQUFFLE1BQU0sYUFBYSxNQUFNO0FBQzVDLFNBQU8sUUFBUSxLQUFLLFVBQVUs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
