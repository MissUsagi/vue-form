<template>
  <div>
    <base-input
      v-model.trim="user.email"
      label="EMAIL"
      id="userEmail"
      type="email"
      placeholder="Enter your email"
      autocomplete="off"
      required
    >    <p class="error-info" v-if="validation.email===false">Please check your email address</p>
    </base-input>

    <password-component @userPassword="getPassword"></password-component>

    <div class="form-row">
      <base-button type="button" class="btn btn-transparent"><a href="#" class="additional-text">Log in instead</a></base-button>
      <base-button @click="submitStepOne" type="button" class="btn btn-primary">
        Next Step
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseInput from "../UI/BaseInput.vue";
import PasswordComponent from "./PasswordComponent.vue";
export default {
  components: {
    BaseInput,
    PasswordComponent,
    BaseButton,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      validation: {
        email: null,
        password: null
      },
      stepOneValidation: false,
    };
  },

  methods: {
    getPassword(value){
      this.user.password = value;
    },
    submitStepOne() {
      this.passwordValidation();
      this.emailValidation();
      if(this.validation.email === true && this.validation.password === true){
        this.stepOneValidation = true;
        this.$emit('stepOneValidated', this.stepOneValidation, this.user, this.validation);
      }
    },

    passwordValidation() {
      const re = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,35}$/;
      const result = re.test(this.user.password);
      if (result === true) {
        this.validation.password = true;
      } else {
        this.validation.password = false;
      }
    },
      emailValidation() {
      const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const result = re.test(this.user.email);
      if (result === true) {
        this.validation.email = true;
      } else 
      this.validation.email = false;
    },
  },
};
</script>

<style scoped>
.password-container {
  position: relative;
}

.password-container button {
  cursor: pointer;
  position: absolute;
  border: none;
  background: none;
  max-width: 32px;
  right: 3%;
  top: 20%;
}

</style>
