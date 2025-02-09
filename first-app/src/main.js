import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this import exists

const app = createApp(App);
app.use(router);
app.mount('#app');
