/// <reference types="vite/client" />
declare module '*.vue' {
    import { ComponentOptions,ComponentCustomProperties } from 'vue'
    import customType from './customType'

const componentOptions:ComponentOptions
    export {
        componentOptions,
        componentCustomProperties
    }
}
declare module 'lodash/fp';
declare module 'mockjs';