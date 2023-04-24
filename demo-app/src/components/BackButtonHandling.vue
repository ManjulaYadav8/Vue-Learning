<template>
  <div>
    <h1>Do not allow browser Back Button</h1>
    <div>

      <div class="form-check d-flex">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          :value="'Yes'"
          @input="readValue($event)"
        />
        <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          :value="'No'"
          @input="readValue($event)"
        />
        <label class="form-check-label" for="flexRadioDefault2"> No </label>

      </div>
     
      <!-- <component :is="'/sucessMsg'" v-if="bool"></component> -->
      
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "backButtonHandling",
  data() {
    return {
      inputvalue: null,
      bool:false
    };
  },

  methods: {
    
    readValue(event) {
      console.log(event.target.value);
      this.inputvalue = event.target.value;
      localStorage.setItem("isDisabled", this.inputvalue);
     

      if (this.inputvalue == "Yes") {
        
        // this.redirect()

        setTimeout(() => {
          this.preback();
        }, 0);

        window.onunload = () => {
          null;
        };

        //  const hash= location.hash.substring(1)
      }
    },

    preback() {
      console.log("*********")
      window.history.forward();
    },
  },

  computed: {
    redirect() {
      return "";
    },
  },
};
</script>

<style scoped>
</style>