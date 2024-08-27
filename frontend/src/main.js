import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.less';
import components from './components/global';
import Router from './router/index';

const app = createApp(App)
app.config.productionTip = false

// components
for (const i in components) {
  app.component(i, components[i])
}
// 国际化
import i18n from "@/language";
app.use(i18n)

app.use(Router).mount('#app')
