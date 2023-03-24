// vite.config.ts
import vue from "file:///F:/test/vue3_study/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///F:/test/vue3_study/node_modules/vite/dist/node/index.js";
import vueSetupExtend from "file:///F:/test/vue3_study/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\test\\vue3_study";
var pathResolve = (dir) => {
  return resolve(__vite_injected_original_dirname, ".", dir);
};
var alias = {
  "@": pathResolve("./src/"),
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
};
var viteConfig = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [vue(), vueSetupExtend()],
    root: process.cwd(),
    resolve: { alias },
    base: mode.command === "serve" ? "./" : env.VITE_PUBLIC_PATH,
    optimizeDeps: {
      include: ["element-plus/lib/locale/lang/zh-cn", "element-plus/lib/locale/lang/en", "element-plus/lib/locale/lang/zh-tw"]
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_PORT,
      open: env.VITE_OPEN,
      hmr: true,
      proxy: {
        "^/api": {
          target: "http://192.168.1.159:3000",
          // 真实接口地址, 后端给的基地址
          changeOrigin: true,
          // 允许跨域
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].[hash].js`,
          chunkFileNames: `assets/[name].[hash].js`,
          assetFileNames: `assets/[name].[hash].[ext]`,
          compact: true,
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            echarts: ["echarts"]
          }
        }
      }
    },
    css: { preprocessorOptions: { css: { charset: false } } },
    define: {
      __VUE_I18N_LEGACY_API__: JSON.stringify(false),
      __VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
      __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
      __VERSION__: JSON.stringify(process.env.npm_package_version)
    }
  };
});
var vite_config_default = viteConfig;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx0ZXN0XFxcXHZ1ZTNfc3R1ZHlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHRlc3RcXFxcdnVlM19zdHVkeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovdGVzdC92dWUzX3N0dWR5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBDb25maWdFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJztcblxuY29uc3QgcGF0aFJlc29sdmUgPSAoZGlyOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHJlc29sdmUoX19kaXJuYW1lLCAnLicsIGRpcik7XG59O1xuXG5jb25zdCBhbGlhczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0J0AnOiBwYXRoUmVzb2x2ZSgnLi9zcmMvJyksXG5cdCd2dWUtaTE4bic6ICd2dWUtaTE4bi9kaXN0L3Z1ZS1pMThuLmNqcy5qcycsXG59O1xuXG5jb25zdCB2aXRlQ29uZmlnID0gZGVmaW5lQ29uZmlnKChtb2RlOiBDb25maWdFbnYpID0+IHtcblx0Y29uc3QgZW52ID0gbG9hZEVudihtb2RlLm1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuXHRyZXR1cm4ge1xuXHRcdHBsdWdpbnM6IFt2dWUoKSwgdnVlU2V0dXBFeHRlbmQoKV0sXG5cdFx0cm9vdDogcHJvY2Vzcy5jd2QoKSxcblx0XHRyZXNvbHZlOiB7IGFsaWFzIH0sXG5cdFx0YmFzZTogbW9kZS5jb21tYW5kID09PSAnc2VydmUnID8gJy4vJyA6IGVudi5WSVRFX1BVQkxJQ19QQVRILFxuXHRcdG9wdGltaXplRGVwczoge1xuXHRcdFx0aW5jbHVkZTogWydlbGVtZW50LXBsdXMvbGliL2xvY2FsZS9sYW5nL3poLWNuJywgJ2VsZW1lbnQtcGx1cy9saWIvbG9jYWxlL2xhbmcvZW4nLCAnZWxlbWVudC1wbHVzL2xpYi9sb2NhbGUvbGFuZy96aC10dyddLFxuXHRcdH0sXG5cdFx0c2VydmVyOiB7XG5cdFx0XHRob3N0OiAnMC4wLjAuMCcsXG5cdFx0XHRwb3J0OiBlbnYuVklURV9QT1JUIGFzIHVua25vd24gYXMgbnVtYmVyLFxuXHRcdFx0b3BlbjogZW52LlZJVEVfT1BFTixcblx0XHRcdGhtcjogdHJ1ZSxcblx0XHRcdHByb3h5OiB7XG5cdFx0XHRcdFwiXi9hcGlcIjoge1xuXHRcdFx0XHRcdHRhcmdldDogXCJodHRwOi8vMTkyLjE2OC4xLjE1OTozMDAwXCIsIC8vIFx1NzcxRlx1NUI5RVx1NjNBNVx1NTNFM1x1NTczMFx1NTc0MCwgXHU1NDBFXHU3QUVGXHU3RUQ5XHU3Njg0XHU1N0ZBXHU1NzMwXHU1NzQwXG5cdFx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLCAvLyBcdTUxNDFcdThCQjhcdThERThcdTU3REZcblx0XHRcdFx0XHRyZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG5cdFx0XHRcdCAgfSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRidWlsZDoge1xuXHRcdFx0b3V0RGlyOiAnZGlzdCcsXG5cdFx0XHRjaHVua1NpemVXYXJuaW5nTGltaXQ6IDE1MDAsXG5cdFx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRcdGVudHJ5RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5baGFzaF0uanNgLFxuXHRcdFx0XHRcdGNodW5rRmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5baGFzaF0uanNgLFxuXHRcdFx0XHRcdGFzc2V0RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5baGFzaF0uW2V4dF1gLFxuXHRcdFx0XHRcdGNvbXBhY3Q6IHRydWUsXG5cdFx0XHRcdFx0bWFudWFsQ2h1bmtzOiB7XG5cdFx0XHRcdFx0XHR2dWU6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAncGluaWEnXSxcblx0XHRcdFx0XHRcdGVjaGFydHM6IFsnZWNoYXJ0cyddLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Y3NzOiB7IHByZXByb2Nlc3Nvck9wdGlvbnM6IHsgY3NzOiB7IGNoYXJzZXQ6IGZhbHNlIH0gfSB9LFxuXHRcdGRlZmluZToge1xuXHRcdFx0X19WVUVfSTE4Tl9MRUdBQ1lfQVBJX186IEpTT04uc3RyaW5naWZ5KGZhbHNlKSxcblx0XHRcdF9fVlVFX0kxOE5fRlVMTF9JTlNUQUxMX186IEpTT04uc3RyaW5naWZ5KGZhbHNlKSxcblx0XHRcdF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX186IEpTT04uc3RyaW5naWZ5KGZhbHNlKSxcblx0XHRcdF9fVkVSU0lPTl9fOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uKSxcblx0XHR9LFxuXHR9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpdGVDb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThPLE9BQU8sU0FBUztBQUM5UCxTQUFTLGVBQWU7QUFDeEIsU0FBUyxjQUFjLGVBQTBCO0FBQ2pELE9BQU8sb0JBQW9CO0FBSDNCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sY0FBYyxDQUFDLFFBQWdCO0FBQ3BDLFNBQU8sUUFBUSxrQ0FBVyxLQUFLLEdBQUc7QUFDbkM7QUFFQSxJQUFNLFFBQWdDO0FBQUEsRUFDckMsS0FBSyxZQUFZLFFBQVE7QUFBQSxFQUN6QixZQUFZO0FBQ2I7QUFFQSxJQUFNLGFBQWEsYUFBYSxDQUFDLFNBQW9CO0FBQ3BELFFBQU0sTUFBTSxRQUFRLEtBQUssTUFBTSxRQUFRLElBQUksQ0FBQztBQUM1QyxTQUFPO0FBQUEsSUFDTixTQUFTLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUFBLElBQ2pDLE1BQU0sUUFBUSxJQUFJO0FBQUEsSUFDbEIsU0FBUyxFQUFFLE1BQU07QUFBQSxJQUNqQixNQUFNLEtBQUssWUFBWSxVQUFVLE9BQU8sSUFBSTtBQUFBLElBQzVDLGNBQWM7QUFBQSxNQUNiLFNBQVMsQ0FBQyxzQ0FBc0MsbUNBQW1DLG9DQUFvQztBQUFBLElBQ3hIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNLElBQUk7QUFBQSxNQUNWLE1BQU0sSUFBSTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1IsUUFBUTtBQUFBO0FBQUEsVUFDUixjQUFjO0FBQUE7QUFBQSxVQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUMzQztBQUFBLE1BQ0g7QUFBQSxJQUNEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUix1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUEsUUFDZCxRQUFRO0FBQUEsVUFDUCxnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixTQUFTO0FBQUEsVUFDVCxjQUFjO0FBQUEsWUFDYixLQUFLLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxZQUNsQyxTQUFTLENBQUMsU0FBUztBQUFBLFVBQ3BCO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLFNBQVMsTUFBTSxFQUFFLEVBQUU7QUFBQSxJQUN4RCxRQUFRO0FBQUEsTUFDUCx5QkFBeUIsS0FBSyxVQUFVLEtBQUs7QUFBQSxNQUM3QywyQkFBMkIsS0FBSyxVQUFVLEtBQUs7QUFBQSxNQUMvQywyQkFBMkIsS0FBSyxVQUFVLEtBQUs7QUFBQSxNQUMvQyxhQUFhLEtBQUssVUFBVSxRQUFRLElBQUksbUJBQW1CO0FBQUEsSUFDNUQ7QUFBQSxFQUNEO0FBQ0QsQ0FBQztBQUVELElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
