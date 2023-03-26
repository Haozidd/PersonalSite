import '@/assets/css/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import setupLocatorUI from "@locator/runtime";
import Divider from '@/components/utils/Divider/index.vue'
import mitt from "mitt";


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
app.component('Divider',Divider)
app.mount('#app')
