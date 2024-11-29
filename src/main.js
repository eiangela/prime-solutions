// main.js
import { createApp } from 'vue';
import App from './App.vue';

// Importações do Vuetify
import vuetify from './vuetify'; // Importa o arquivo `vuetify.js`
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Estilos globais
import './assets/scss/main.scss';

// Criação do aplicativo Vue
createApp(App)
  .use(vuetify) // Usa a instância do Vuetify configurada
  .mount('#app');