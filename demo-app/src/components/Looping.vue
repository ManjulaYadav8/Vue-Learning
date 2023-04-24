<template>
  <div>
    <div v-for="(name, index) in names" :key="name">
      <h1>{{ index }}--->{{ name }}</h1>
    </div>



    <!-- <div v-for="name in names" :key="name"> 
        <p >{{name}}</p>
        <input placeholder="enter a name" >
        <hr />

    </div> -->
    <button @click="shuffle"> click here to shuffle</button>
  </div>

  
</template>

    



<script>
export default {
  name: "LoopingArray",
  data() {
    return {
      names: ["a", "b", "c", "d", "e"],
    };
  },

  methods:{
    shuffle(){
        console.log(this.names)
    }
  }
};
</script>


<style>
</style>