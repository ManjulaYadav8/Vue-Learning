
import VueRouter from "vue-router";
// import backButton from "./components/BackButtonHandling.vue";
import formHandling from "./components/formHandling.vue";
import sucessMsg from "./components/Sucess.vue"


import Vue from 'vue';

// let VueRouter = require("vue-router")
Vue.use(VueRouter)

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
    path: '/router1',
    name: 'BackButtonHandling',
    Component: ()=> import ('../src/components/BackButtonHandling.vue')

  },


  {
    name: "sucessMsg",
    path: "/sucessMsg",
    Component: sucessMsg

  },

  {
  name: "formHandling",
    path: "/form",
    Component: formHandling

  }
]


const router = new VueRouter({

 
  routes
})

export default router;