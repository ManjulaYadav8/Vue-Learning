<template>
    <div>
        <button @click="showpopup"> show popup</button>
        <h2 v-if="show"> This is a popup page</h2>
      
      
        <childComp v-show="childcompshow" @setshowasfalse="childData" v-model="name"/>
    </div>
</template>

<script>

    import childComp from "./childComp.vue"
    export default {

        name:"parentComp",

        components :{
            childComp
        },
    data(){
        return {
            childcompshow:false,
           show:'',
           name:''
        }
    },

    methods:{
        showpopup(){
            this.childcompshow=true
            this.show=true

        },
        childData(value){
            console.log(this.name)
             this.childcompshow=false
            this.show=value

        }
    }
        
    }
</script>

<style scoped>

</style>