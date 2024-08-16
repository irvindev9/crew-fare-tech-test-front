import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const routes = [
  {
    path: '/',
    component: App,
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
