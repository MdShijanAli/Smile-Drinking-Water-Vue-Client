import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'


import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
app.component('Carousel', Carousel)
app.component('Tag', Tag)
app.component('Button', Button)
app.mount('#app')
