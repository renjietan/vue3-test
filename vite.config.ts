import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from "unplugin-auto-import/vite";
import unocss from "unocss/vite"
import { presetIcons, presetAttributify, presetUno } from "unocss"
const pathResolve = (dir: string) => {
	return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
	'@': pathResolve('./src/'),
};

// const viteConfig = defineConfig((mode: ConfigEnv) => {
// 	console.log("mode.mode===========",);
// 	const env = loadEnv(mode.mode, process.cwd());
// 	return {
// 		plugins: [vue({
// 			reactivityTransform: true
// 		}), vueSetupExtend(), AutoImport({
// 			imports: ["vue"],
// 			dts: "src/auto-import.d.ts"
// 		}), unocss({
// 			//  需要 import { presetIcons, presetAttributify, presetUno } from "unocss"
// 			// presetIcons() 内置图标  需要安装 npm i -D @iconify-json/ic 官网地址：https://icones.js.org/collection/ic
// 			// presetAttributify() 属性美化 <div m="10"></div> 等同于
// 			// 
// 			presets: [presetIcons(), presetAttributify(), presetUno()],
// 			rules: [
// 				//  配置静态CSS
// 				["red", { "background": "red" }],
// 				["color-w", { "color": "white" }],
// 				// m-10 等同于 margin: 100px
// 				[/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
// 			],
// 			//组合类名： 等同于 red 
// 			shortcuts: {
// 				// 相当于讲  rules 中的 red 和 color-w 进行了合并
// 				"zuhe": ["red", "color-w"]
// 			}
// 		})],
// 		root: process.cwd(),
// 		resolve: { alias },
// 		base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
// 		optimizeDeps: {
// 			include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en', 'element-plus/lib/locale/lang/zh-tw'],
// 		},
// 		server: {
// 			host: '0.0.0.0',
// 			port: env.VITE_PORT as unknown as number,
// 			open: env.VITE_OPEN,
// 			hmr: true,
// 			proxy: {
// 				"^/api": {
// 					target: "http://192.168.1.159:3000", // 真实接口地址, 后端给的基地址
// 					changeOrigin: true, // 允许跨域
// 					rewrite: (path) => path.replace(/^\/api/, ""),
// 				},
// 			},
// 		},
// 		build: {
// 			outDir: 'dist',
// 			chunkSizeWarningLimit: 1500,
// 			rollupOptions: {
// 				output: {
// 					entryFileNames: `assets/[name].[hash].js`,
// 					chunkFileNames: `assets/[name].[hash].js`,
// 					assetFileNames: `assets/[name].[hash].[ext]`,
// 					compact: true,
// 					manualChunks: {
// 						vue: ['vue', 'vue-router', 'pinia'],
// 						echarts: ['echarts'],
// 					},
// 				},
// 			},
// 		},
// 		css: { preprocessorOptions: { css: { charset: false } } },
// 		define: {
// 			__VUE_I18N_LEGACY_API__: JSON.stringify(false),
// 			__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
// 			__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
// 			__VERSION__: JSON.stringify(process.env.npm_package_version),
// 		},
// 	};
// });

export default (mode) => {
	const env = loadEnv(mode.mode, process.cwd());
	// 绝对路径
	console.log(process.cwd())
	console.log(env)
	return defineConfig({
		plugins: [vue({
			reactivityTransform: true
		}), vueSetupExtend(), AutoImport({
			imports: ["vue"],
			dts: "src/auto-import.d.ts"
		}), unocss({
			//  需要 import { presetIcons, presetAttributify, presetUno } from "unocss"
			// presetIcons() 内置图标  需要安装 npm i -D @iconify-json/ic 官网地址：https://icones.js.org/collection/ic
			// presetAttributify() 属性美化 <div m="10"></div> 等同于
			// 
			presets: [presetIcons(), presetAttributify(), presetUno()],
			rules: [
				//  配置静态CSS
				["red", { "background": "red" }],
				["color-w", { "color": "white" }],
				// m-10 等同于 margin: 100px
				[/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
			],
			//组合类名： 等同于 red 
			shortcuts: {
				// 相当于讲  rules 中的 red 和 color-w 进行了合并
				"zuhe": ["red", "color-w"]
			}
		})],
		root: process.cwd(),
		resolve: { alias },
		base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
		optimizeDeps: {
			include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en', 'element-plus/lib/locale/lang/zh-tw'],
		},
		server: {
			host: '0.0.0.0',
			port: env.VITE_PORT as unknown as number,
			open: env.VITE_OPEN,
			hmr: true,
			proxy: {
				"^/api": {
					target: "http://192.168.1.159:3000", // 真实接口地址, 后端给的基地址
					changeOrigin: true, // 允许跨域
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		build: {
			outDir: 'dist',
			// 当文件的大小超过1500时， 给出警告提示
			chunkSizeWarningLimit: 1500,
			sourcemap: false, //生成环境中  不需要sourcemap 太大了
			cssCodeSplit: true, // 把CSS 文件拆分
			minify: false, //是否禁用最小化混淆，esbuild 打包速度最快  terser打包体积最小
			assetsInlineLimit: 1500, //小于该值，图片将吧诶打包为bs
			rollupOptions: {
				output: {
					entryFileNames: `assets/[name].[hash].js`,
					chunkFileNames: `assets/[name].[hash].js`,
					assetFileNames: `assets/[name].[hash].[ext]`,
					compact: true,
					manualChunks: {
						vue: ['vue', 'vue-router', 'pinia'],
						echarts: ['echarts'],
					},
				},
			},
		},
		css: { preprocessorOptions: { css: { charset: false } } },
		define: {
			__VUE_I18N_LEGACY_API__: JSON.stringify(false),
			__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
			__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
			__VERSION__: JSON.stringify(process.env.npm_package_version),
		},
	});
};
