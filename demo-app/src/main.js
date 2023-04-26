import Vue from 'vue';
import App from './App.vue';
import router from "./routes"
// import VueRouter from 'vue-router';
// import VueRouter from "vue-router"

// import backButtonHandling from "./components/BackButtonHandling.vue"
// import formHandling from "./components/formHandling.vue"



Vue.config.productionTip = false
// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes: Routes,
// });


// const routes=[
//   // {path:'/',component:formHandling},
//   {path:'/backbutton', component:backButtonHandling}
// ]


// const router = new VueRouter({
//   routes
// })

// const app = Vue.createApp({
//     router,
// })

// app.mount('#app')

new Vue({
    router,
    render: h => h(App)
   
 }).$mount('#app')


