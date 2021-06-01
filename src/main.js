import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/routes.js"
import store from "./store/store.js"

createApp(App).use(store).use(router).mount('#app')
