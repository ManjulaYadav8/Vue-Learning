<template>
  <div>
    <form>
      <label for="name">Name : </label>
      <input type="text" v-model="formValues.name" />
      <br />
      <br />
      <label for="phno">Phone no : </label>
      <input type="text" v-model="formValues.phno" />
      <div>
        <br />
        <button @click.prevent="Submit()">Submit</button>
      </div>
    </form>

    <h2>Method Full Name {{fullname()}}</h2>
    <h2>Computed Full Name {{fullName}}</h2>

  
  </div>
</template>


<script>
export default {
  name: "formHandling",
  data() {
    return {
      formValues: {
        name: "",
        phno: "",
      },
      fname:"Manjula",
      lname:"Yadav"
    };
  },

  methods: {

    Submit() {
    //   event.preventDefault();
      console.log("Form vales-->", this.formValues);
    },

    fullname(){
        console.log("methods prop")
        return `${this.fname} ${this.lname}`
    },
  },

    computed :{
      fullName(){
        console.log("computed prop")
        return `${this.fname} ${this.lname}`
    }
    }

  
}
</script>


<style>
</style>