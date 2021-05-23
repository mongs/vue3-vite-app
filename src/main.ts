import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index';
import store from './stores/index';
import setupAntdv from 'plugins/antdv';
import setupHttp from 'plugins/http';

const app = createApp(App)

setupAntdv(app);
setupHttp(app);

app
  .use(router)
  .use(store)
  .mount('#app')
