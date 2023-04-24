<template>
<div>

    <!--<div v-text="Name">  </div>-->
    <!---<div v-html="msg">  </div>-->
    <!---<div v-bind:id="bindId">V-bind ID</div>-->
      <!--<h2 v-bind:class='isUnderline'>Class Binding</h2>-->
    <h2 v-bind:class="condUnderline && 'underline'">conditional</h2>
    <h2 v-bind:class="['underline','font']">Applied two classes using array</h2>
    <!---<button v-bind:disabled="isDisabled">V-bind ID</button>-->

   </div>
    
    
</template>


<script>

export default {
   name:"BindingText",
    data(){
        return{
            Name:"Manjula",
            msg:'<h1>Hello world</h1>',
            bindId:"container",
            isDisabled:true,
            isUnderline:"underline",
            condUnderline:true
        }
    }
    
}
</script>


<style>
#container{
    color:red
}

.underline{
    text-decoration: underline;
    color:blue
}

.font{
    font-style: italic;
}
</style>
