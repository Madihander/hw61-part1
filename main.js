import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/index'
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(components)
    .use(store)
    .use(router)
    .mount('#app')