<template>
    <div>
        <input type="text" :value="modelvalue" @input="$emit('update:modelvalue',$event.target.value)"/>
        <button @click="$emit('setshowasfalse',false)">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name:"childComp",
        props:{
            modelvalue:String
        },
    
        emit:'setshowasfalse',
        data (){
            return {
                
               

            }
        }
    }
</script>

<style scoped>

</style>