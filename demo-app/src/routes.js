import { createWebHistory, createRouter } from "vue-router";
import backButton from "./components/BackButtonHandling.vue";
 import formHandling from "./components/formHandling.vue";
import sucessMsg from "./components/Sucess.vue"
// import Vue from 'vue';
// let VueRouter = require("vue-router")

// Vue.use(VueRouter)

// const router = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//       { path: '/backbtn', component: backButton },
//       { path: '/msg', component: sucessMsg },

//     ]
//   });

const routes = [
  {
    name: "sucessMsg",
    path: "/sucessMsg",
    Component: sucessMsg

  },
  {

    name: "backButton",
    path: "/",
    Component: backButton

  },


  {
    name: "formHandling",
    path: "/form",
    Component: formHandling

  }
]


const router = createRouter({

  history: createWebHistory(),
  routes
})

export default router;