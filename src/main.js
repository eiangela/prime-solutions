// import './assets/main.css'
import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';


import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify()

export default vuetify

createApp(App)
.use(vuetify)
.mount('#app')
