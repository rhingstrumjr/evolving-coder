import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faSquare,
  faTrashAlt,
  faEdit,
  faArrowAltCircleDown
} from "@fortawesome/free-regular-svg-icons";

Vue.config.productionTip = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faMinusSquare,
  faPlusSquare,
  faSquare,
  faTrashAlt,
  faEdit,
  faArrowAltCircleDown
);

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
