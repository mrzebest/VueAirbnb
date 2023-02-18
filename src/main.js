import { createApp } from 'vue'
import App from './App.vue';

import "./assets/reset.css";
import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faWaterLadder} from '@fortawesome/free-solid-svg-icons'
import { faMountainSun} from '@fortawesome/free-solid-svg-icons'
import { faPalette} from '@fortawesome/free-solid-svg-icons'
import { faChessRook} from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret)
library.add(faStar)
library.add(faMagnifyingGlass)
library.add(faWaterLadder)
library.add(faMountainSun)
library.add(faPalette)
library.add(faChessRook)
library.add(faComment)






createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')



