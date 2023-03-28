import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia, PiniaPluginContext } from "pinia";

const setStroage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getStroage = (key: string) => {
    const value = localStorage.getItem(`${key}`)
    return !!value ? JSON.parse(value) : {}
}
const piniaPlugins = (context: PiniaPluginContext) => {
    const { store } = context
    const value = getStroage(store.$id)
    store.$subscribe(() => {
        setStroage(store.$id, toRaw(store.$state))
    })
    return {
        ...value
    }
}
const pinia = createPinia()
pinia.use(piniaPlugins)
createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app')
