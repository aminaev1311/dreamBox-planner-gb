import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faCheckCircle)

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount("#app");
