<template>
    <div class="password-container">
      <base-input class="test" v-model.trim="password" label="password" id="userpassword" :type="inputType" placeholder="Enter your password" autocomplete="off"  @input="emitValue"></base-input>
     <button type="button" @click="togglePasswordInput">
        <img src="img/eye.svg" alt="" />
      </button>

    <div class="p-validation">
      <p :class="passwordLengthValidation">At least 8 characters</p>
      <p :class="passwordLetterValidation">At least one letter</p>
      <p :class="passwordDigitValidation">At least one digit</p>
    </div>
        </div>
</template>

<script>
import BaseInput from '../UI/BaseInput.vue';
export default {
   components: {
  BaseInput
},
  props: {  
    userPass: {
      default: ''
   }
   },
  data() {
    return {
      inputType: "password",
      password: "",

    };
  },
  computed: {
    passwordLengthValidation() {
      if (this.password != "" && this.password.length < 8) {
        return "invalid";
      }  if (this.password.length >= 8) {
        return "valid";
      } else return "pending";
    },

    passwordLetterValidation() {
      let re = /[a-zA-Z]/;
      const result = re.test(this.password);
      if (this.password != "" && result === true) {
        return "valid";
      } else if (this.password != "" && result === false) {
        return "invalid";
      } else return "pending";
    },

    passwordDigitValidation() {
      let re = /[0-9]/;
      const result = re.test(this.password);
      if (this.password != "" && result === true) {
        return "valid";
      } else if (this.password != "" && result === false) {
        return "invalid";
      } else return "pending";
    },
  },

  methods: {
    togglePasswordInput() { 
      if (this.password != "" && this.inputType === "password") {
        this.inputType = "text";
      } else if (this.password != "" && this.inputType === "text") {
        this.inputType = "password";
      } else this.inputType = "password";
    },

    emitValue() {
               this.$emit('userPassword', this.password);
    },
  },
};
</script>

<style scoped>
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
.input-container input {
  position: relative;
}

  button {
  cursor: pointer;
  position: absolute;
  border: none;
  background: none;
  max-width: 32px;
  right: 3%;
  top: 20%;
}

.p-validation {
  text-align: left;
  letter-spacing: 0.04em;
  color: var(--dark-gray);
  line-height: 170%;
  margin-bottom: 5px;
  margin-top: 30px;
}

p.valid {
  color: green;
}
p.invalid {
  color: red;
}
</style>