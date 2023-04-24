<template>
    <div>
        <form>
            <label for="ID">ID : </label>
            <input type="text" placeholder="ente ID" v-model="formdata.id"/>
            <br/><br/>
            <label for="Title">Title: </label>
            <input type="text" placeholder="Enter a title" v-model="formdata.title"/>
              <br/><br/>
            <label for="Body">Body : </label>
            <input type="text" placeholder="enter a body" v-model="formdata.body"/>
        </form>

        <div>
            <button @click="postData()">
                Submit
            </button>
        </div>

    </div>
</template>

<script>

import axios from 'axios'
//  import axios from "axios"

    export default {
        name:"postRequest",
        data(){
            return {
                formdata:{
                    id:'',
                    title:'',
                    body:''
                }
            }
        },

        methods :{

            postData(){
                
                console.log(this.formdata)
                axios.post('https://jsonplaceholder.typicode.com/posts',this.formdata)
                .then((response)=>{ 
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })

            }
        }
    }
</script>

<style scoped>

</style>