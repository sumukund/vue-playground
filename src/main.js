import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FlippableCard from './components/FlippableCard.vue'
import TestComponent from './components/TestComponent.vue'
import TheWelcome from './components/TheWelcome.vue'
import HelloWorld from './components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router';
import CounterButton from './components/CounterButton.vue'

const routes = [
    { path: '/', component: TheWelcome },
    { path: '/testing', component: CounterButton },
    { path: '/test/:id', component: TestComponent, props: true },
  ]
  
  export const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  
app = createApp(App)
app.use(router)
app.mount('#app')