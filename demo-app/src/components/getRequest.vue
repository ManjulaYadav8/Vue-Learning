<template>
  <div>
    <button @click="getData">Show Data table</button>

    <table v-if="isLoaded">
        <thead>
            <th>ID</th>
            <th>title</th>
            <th>Details</th>
        </thead>
        <tbody>
            <tr v-for="data in listData" :key="data.id">
                <td>{{data.id}}</td>
                <td>{{data.title}}</td>
                <td>{{data.body}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "getRequest",
  data() {
    return {
      listData: [],
      isLoaded: false
    };
  },

  methods: {
    getData() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
             console.log("response",response.data)
             this.listData=response.data
        })
        .catch((error)=>{
            console.log(error)

        })

        this.isLoaded=true;

    },
  },
};
</script>

<style scoped>
</style>