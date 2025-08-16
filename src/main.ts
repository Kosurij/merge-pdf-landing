import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useSystemTheme } from "@/composables/useSystemTheme.ts";

useSystemTheme()

createApp(App).use(router).mount('#app')
