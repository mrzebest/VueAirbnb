import { createApp } from 'vue'
import App from './App.vue'
import "./assets/reset.css";
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faUserSecret)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

