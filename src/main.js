import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from "./store/store.js"
import router from "./router/routes.js"
router.beforeEach((to, from) => {
    console.log("To:", to, "From:", from);
    if (to.name === "Quiz") {
        if(!store.state.groups.length) {
            return { name: 'Home' }
        }
    } else if (to.name === "Finalize") {
        if(!store.state.quizentries.length){
            return { name: 'Home' } 
        }
    }
})

createApp(App).use(store).use(router).mount('#app')
