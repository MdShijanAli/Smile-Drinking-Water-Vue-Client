import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import TieredMenu from 'primevue/tieredMenu'
import DataView from 'primevue/dataView'
import Rating from 'primevue/rating'
import Toolbar from 'primevue/toolbar'
import FileUpload from 'primevue/fileUpload'
import DataTable from 'primevue/dataTable'
import InputText from 'primevue/inputText'
import Textarea from 'primevue/textarea'
import Column from 'primevue/Column'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radioButton'
import InputNumber from 'primevue/inputNumber'
import "preline/preline";

import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
app.component('Carousel', Carousel)
app.component('Tag', Tag)
app.component('Button', Button)
app.component('TieredMenu', TieredMenu)
app.component('DataView', DataView)
app.component('Rating', Rating)
app.component('Toolbar', Toolbar)
app.component('FileUpload', FileUpload)
app.component('DataTable', DataTable)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Column', Column)
app.component('Dialog', Dialog)
app.component('Dropdown', Dropdown)
app.component('RadioButton', RadioButton)
app.component('InputNumber', InputNumber)
app.mount('#app')
