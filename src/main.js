import { createApp } from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGuitar, faHeadphones, faLaptop, faSlidersH, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faYoutube);
library.add(faInstagram);
library.add(faGuitar);
library.add(faHeadphones);
library.add(faLaptop);
library.add(faSlidersH);
library.add(faMusic)

const optionsSweetAlert = {
  confirmButtonColor: 'black',
};

createApp(App)
  .use(VueSweetalert2, optionsSweetAlert)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
