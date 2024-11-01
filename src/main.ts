/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-xywoXu2pIerk_NipVwKfQNnurgjSYew', // Replace with your actual Google Maps API key
  },
})
registerPlugins(app)

app.mount('#app')
