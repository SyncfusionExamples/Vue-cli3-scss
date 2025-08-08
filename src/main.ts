import { createApp } from 'vue'
import App from './App.vue'
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons'
import { GridPlugin } from "@syncfusion/ej2-vue-grids"

const app = createApp(App)

// Register Syncfusion plugins
app.use(ButtonPlugin)
app.use(GridPlugin)

app.mount('#app')
