import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import checker from "vite-plugin-checker";
import postcssPresetEnv from 'postcss-preset-env'
import VitePluginInspector from "vite-plugin-vue-inspector";
import {viteMockServe} from 'vite-plugin-mock'
export default defineConfig({
    server:{
        port:5173,
        host:'0.0.0.0'
    },
    plugins: [
        vue(),
        checker({typescript:true}),
        VitePluginInspector(),
        viteMockServe()
    ],
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'../src')
        }
    },
    css:{
        postcss:{
            plugins:[postcssPresetEnv]
        },
        preprocessorOptions:{
            scss:{
                additionalData:'@import "@/assets/css/globalVariable.scss";'
            }
        }
    }
})