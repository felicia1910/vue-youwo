import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

//element
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

import './assets/css/app.scss';


const pinia = createPinia();
const app = createApp(App);

//icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  };

app.use(pinia).use(ElementPlus).mount('#app')
