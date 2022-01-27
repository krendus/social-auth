import { createApp  } from 'vue'
import App from './App.vue'
import GAuth from 'vue3-google-oauth2'
const gauthOption = {
  clientId: '526442939378-pd1060pd5l5p6jtqp5h6ajg94luhv6br.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
const app = createApp(App)
app
app.use(GAuth, gauthOption)
app.mount('#app')
