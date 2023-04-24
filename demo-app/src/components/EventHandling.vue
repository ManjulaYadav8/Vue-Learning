<template>

    <div>
        <h2>{{name}}</h2>
        <button @click="name='Manjula Yadav'">Change the Name</button>

        <h2 >{{count}}</h2>
        <button @click=Increment()>Increment</button>
        <button @click=Decrement()>Decrement</button>
    </div>
    
</template>

<script>
export default {
    name:"EventHandling",
    data (){
        return {
            name:"Manjula",
            count:1
        }
    },
    
    methods:{
        Increment(){
            return this.count=this.count + 1;
        },

        Decrement(){
            return this.count=this.count - 1;
        }


    },

    computed : {},

    watch :{
        count(value){
            if(value >10){
                alert("Your number is too large")
            }
        }
    }
}
</script>


<style>

</style>