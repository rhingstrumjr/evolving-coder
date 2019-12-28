import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMinusSquare, faPlusSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faMinusSquare, faPlusSquare, faSquare)

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
