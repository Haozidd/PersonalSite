import '@/assets/css/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import setupLocatorUI from "@locator/runtime";
import Divider from '@/components/utils/Divider/index.vue'
import Loading from '@/components/utils/LoadingEffect/index.vue'
import mitt from "mitt";
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'




import router from "@/router"
const EventBus= mitt()
if (process.env.NODE_ENV === "development") {
    setupLocatorUI({
        adapter: "vue"
    });
}
declare module 'vue'{
    interface ComponentCustomProperties{
        EventBus: typeof EventBus
    }
}


const app = createApp(App)
app.config.globalProperties.EventBus = EventBus
app.component('Divider',Divider).use(router).component('Loading',Loading)
app.mount('#app')
