import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tickets from "../views/Tickets.vue";
import Patients from "../views/Patients.vue";
// import Doctors from "../views/Doctors.vue";
import Reports from "../views/Reports.vue";
import Calendar from "../views/Calendar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/patients",
    name: "Patients",
    component: Patients,
  },
  // {
  //   path: "/doctors",
  //   name: "Doctors",
  //   component: Doctors,
  // },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
