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
    meta: {
      title: "Home",
    },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
    meta: {
      title: "Tickets",
    },
  },
  {
    path: "/patients",
    name: "Patients",
    component: Patients,
    meta: {
      title: "Patients",
    },
  },
  // {
  //   path: "/doctors",
  //   name: "Doctors",
  //   component: Doctors,
  //   meta: {
  //     title: "Doctors",
  //   },
  // },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
    meta: {
      title: "Reports",
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: {
      title: "Calendar",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
