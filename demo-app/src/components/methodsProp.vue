<template>

    <div>

        <h2>{{add()}}</h2>
        <h2>{{addvthparam(1,2,3)}}</h2>
        <h2>{{multiply(10)}}</h2>


    </div>
    
</template>


<script>
export default {
    name:"methodsProp",
    data (){
        return {
            num:5


        }
    },

    methods:{

        add(){
            return 1+5+4;
        },

        addvthparam(a,b,c){
            return a+b+c

        },

        multiply(number){
            return  number * this.num;
        }
        

    }
    
}
</script>

<style>

</style>