import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import checker from "vite-plugin-checker";
import postcssPresetEnv from 'postcss-preset-env'
import VitePluginInspector from "vite-plugin-vue-inspector";

export default defineConfig({
    plugins: [
        vue(),
        checker({typescript:true}),
        VitePluginInspector()
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