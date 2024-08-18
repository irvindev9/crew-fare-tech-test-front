import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'svgmap/dist/svgMap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

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
