import { createApp } from 'vue'
import './style.scss'
import {router} from './routes/router.ts'
import App from './App.vue'

const app = createApp(App);

app.use(router);

app.mount("#app");
