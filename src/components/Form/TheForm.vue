<template>
<div>
<base-header v-if="activeFormStep==='form-step-one'" heading="Hello!" subheading="Care to register?"></base-header>
<base-header v-if="activeFormStep=== 'form-step-two'" heading="Great!" subheading="Almost Done!"></base-header>
   <base-container v-if="formSubmitted===false">
    <form @submit.prevent="submitForm">
       <component @stepOneValidated="getStepOneData" @sendData="collectData" :is="activeFormStep"></component>
    </form>
  </base-container>
       <form-success v-if="formSubmitted===true" :name="userData.name" :email="userData.email"></form-success>
</div>

</template>

<script>
import FormStepOne from './FormStepOne.vue';
import FormStepTwo from './FormStepTwo.vue';
import FormSuccess from './FormSuccess.vue';
export default {
  components: {
    FormStepOne,
     FormStepTwo,
     FormSuccess
  },
  data(){
   return{   
      activeFormStep: 'form-step-one',
      userData: {
         email: '',
         password: '',
         name: '',
         lastName: '',
         birthDate: '',
         termsConfirmed: ''
      },
      dataValidation: {
         email: true,
         password: true,
         name: false,
         lastName: false,
         birthDate: false,
         termsConfirmed: false
      },
      formSubmitted: false,
      }
  },
   methods: {
      submitForm() {
         for (const key of Object.keys(this.dataValidation))
                {
        if (this.dataValidation[key] === false) {
          return false;
        }       
      } console.log(this.dataValidation);
      this.activeFormStep = '';
      this.formSubmitted = true;

    },
      collectData(user, validation){
            this.userData.name = user.name;
            this.userData.lastName = user.lastName;
            this.userData.birthDate = user.birthDate;
            this.userData.termsConfirmed = user.termsConfirmed;
            this.dataValidation.name = validation.name;
            this.dataValidation.lastName = validation.lastName;
            this.dataValidation.birthDate = validation.birthDate;
            this.dataValidation.termsConfirmed = validation.termsConfirmed;
         console.log(this.userData);
         console.log(this.dataValidation);
      },
      getStepOneData(value, user, validation){
         if(value === true)
            this.activeFormStep = 'form-step-two';
            this.userData.email = user.email;
            this.userData.password = user.password;
            this.dataValidation.email = validation.email;
            this.dataValidation.password = validation.password;
      },
} }
</script>

<style>
   input::-ms-reveal,
      input::-ms-clear {
        display: none;
      }
      .form-row{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0;
   }

</style>