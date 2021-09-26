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
  faCoins,
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
  faCoins,
  faCalendarAlt,
  faLock,
  faStar,
  faFileInvoice,
  faImage
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});

///////////////////////////////////////////////////////////

// // Starting new Xml Http Request (XHR)
// let myRequest = new XMLHttpRequest();
// // When my request is ready do the next
// myRequest.onreadystatechange = function () {
//   // Checking if my request is ok and succeded
//   if (this.readyState === 4 && this.status === 200) {
//     // Initialization Of Variables
//     let patientsData = JSON.parse(this.responseText),
//         patient_name = patientsData[0].name;
    
//     console.log(patient_name);
//   }
// };
// // Selecting the json file that contains the data
// myRequest.open("GET", "https://api.mockaroo.com/api/73a3f2d0?count=20&key=871b02e0", true);
// // Sending the request to get the json file
// myRequest.send();

///////////////////////////////////////////////////////////

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
