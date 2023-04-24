<template>
  <div>
    <h1 v-if="num===0">num is equal to zero</h1>
    <h1 v-else-if="num>0"> Number is positive</h1>
    <h1 v-else-if="num<0">Number is negative</h1>
    
    <h2 v-else>number is not zero</h2>
    <h2 v-show="false">Display the text</h2>
  </div>

</template>


<script>
export default {
  name: "conditionsApply",
  data() {
    return {
        num:1,
        
    };
  },
};
</script>



<style>
</style>