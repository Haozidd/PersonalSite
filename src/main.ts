import '@/assets/css/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import setupLocatorUI from "@locator/runtime";
import Divider from '@/components/utils/Divider/index.vue'
if (process.env.NODE_ENV === "development") {
    setupLocatorUI({
        adapter: "vue"
    });
}
const app = createApp(App)

app.component('Divider',Divider)




app.mount('#app')
