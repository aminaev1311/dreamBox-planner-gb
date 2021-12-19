import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faShare, faChartLine, faMoneyBillWave,
    faBrain, faHeartbeat, faUserFriends, faFeatherAlt,
    faYinYang, faSkiing } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt, faShare, faChartLine,
    faMoneyBillWave, faBrain, faHeartbeat, faUserFriends,
    faFeatherAlt, faYinYang, faSkiing)

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount("#app");
