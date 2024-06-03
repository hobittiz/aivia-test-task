import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');