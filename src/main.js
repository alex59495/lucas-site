import { createApp } from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faYoutube);
library.add(faInstagram);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
