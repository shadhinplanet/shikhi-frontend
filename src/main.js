import { createApp } from 'vue'
import App from './App.vue'

import './core/axios';
import router from './core/router';

import './assets/style.css';


const app = createApp(App);
app.use(router);
app.mount('#app');
