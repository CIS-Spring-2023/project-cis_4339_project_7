//Pulled important pinia code from most recent class.

import { createApp, markRaw } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

//library from class (pinia)
import { createPinia } from 'pinia'

const app = createApp(App)

//pinia root store
const pinia =  createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router)
});

app.use(pinia)
app.use(router)
app.mount('#app')
