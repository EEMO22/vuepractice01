import { createApp } from "vue";
import App from "./App.vue";
import router from '@/router/index';
import store from '@/store/index';

// createApp(App).mount("#app");

new Vue({
    router,
    store,
}).$mount('#app');
