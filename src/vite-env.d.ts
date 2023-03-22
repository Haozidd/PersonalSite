/// <reference types="vite/client" />
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    import customType from './customType'


    const componentOptions: ComponentOptions
    export {
        componentOptions
    }
}