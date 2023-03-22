import { defineConfig } from 'vite'

import viteBaseConfig from "./configuration/vite.base.config";
import viteDevConfig from "./configuration/vite.dev.config";
import viteProdConfig from "./configuration/vite.prod.config";

const envResolver={
    'build':()=>({...viteBaseConfig,...viteProdConfig}),
    'serve':()=>{
        return Object.assign({},viteBaseConfig,viteDevConfig)
    }
}

export default defineConfig(({command,mode})=>{
    return envResolver[command]()
})
