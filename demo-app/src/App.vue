<template>
  <div id="app">
    <!-- <HelloWorld name="Manjula" /> -->
    <!-- <Binding /> -->
    <!-- <condcomp/> -->
    <!-- <loopingcomp/> -->
    <!-- <methodsComp/> -->
     <!-- <eventHandComp/>  -->
    
    <!-- <formHandlingComp/> -->
    <!-- <parentComp/> -->
    <!-- <getReq/>  -->
    <!-- <postRequset/> -->
    <!-- <backButtonHandling/> -->
    <!-- <router-link to="/backbtn">Go to Back Button Handling Page</router-link> -->
   <!-- <a href="/form"> Go to Back Button Handling Page</a> -->
   <!-- <component :is="currentview"/> -->
    <router-link to="/router1">Home</router-link>  
     <router-view></router-view>
  </div>
</template>

<script>
// import condcomp from "./components/conditions.vue"
// import HelloWorld from "./components/HelloWorld.vue";
//Vue.component('Binding', require('./components/Binding.vue'));
// import Binding from "./components/Binding.vue";
// import loopingcomp from "./components/Looping.vue"
// import methodsComp from "./components/methodsProp.vue"
//  import eventHandComp from "./components/EventHandling.vue"
// import formHandlingComp from "./components/formHandling.vue"
// import parentComp from "./components/parent.vue"
// import getReq from "./components/getRequest.vue"
// import postRequset from "./components/postRequset.vue" 
// import backButtonHandling from "./components/BackButtonHandling.vue"
//  import routes from "./routes"


export default {
  name: "App",

  data(){
    return {
      
    }
  },


  components: {
    // HelloWorld,
    // Binding,
    // condcomp,
    // loopingcomp,
    // methodsComp,
    //  eventHandComp,
    // formHandlingComp,
    // parentComp
    // getReq,
    // postRequset,
  //  backButtonHandling
  },


  computed :{
   
  },

  mounted() {
    
  }


};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
