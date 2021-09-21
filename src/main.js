import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VCalendar from "v-calendar";
import "./assets/general.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "normalize.css";
import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faTicketAlt,
  faUser,
  faBars,
  faUserPlus,
  faPlus,
  faUserMd,
  faCalendarAlt,
  faLock,
  faStar,
  faFileInvoice,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faTicketAlt,
  faUser,
  faBars,
  faUserPlus,
  faPlus,
  faUserMd,
  faCalendarAlt,
  faLock,
  faStar,
  faFileInvoice,
  faImage,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
