<template>
<div class="form-container">
      <base-input
      v-model.trim="user.name"
      label="NAME"
      id="userName"
      type="text"
      placeholder="e.g. James"
      autocomplete="off"
    ><p class="error-info" v-if="validation.name===false">Please check your name</p></base-input>
       <base-input
      v-model.trim="user.lastName"
      label="LAST NAME"
      id="lastName"
      type="text"
      placeholder="e.g. Wilson"
      autocomplete="off"
    ><p class="error-info" v-if="validation.lastName===false">Please check your last name</p></base-input>
       <base-input
      v-model.trim="user.birthDate"
      label="DATE OF BIRTH"
      id="birthDate"
      type="date"
      placeholder="DD/MM/YYYY"
      autocomplete="off"
    ><p class="additional-info" :class="{'error-info' : validation.birthDate===false}">You should be minimum 18 years old</p></base-input>

      <base-checkbox @isChecked="termsAccepted" id="terms" value="confirmed" name="terms">I accept <a href="#">Privacy Policy</a></base-checkbox> 
      <p class="error-info" v-if="validation.termsConfirmed===false">You must accept our privacy policy</p>

        <div class="form-row">
           <base-button type="button" class="btn btn-transparent"><a href="#" class="additional-text">Log in instead</a></base-button>
          <base-button
            type="submit"
            @click.self="submitStepTwo"
            class="btn btn-primary">
            Register
          </base-button>
        </div>
</div>
</template>

<script>

export default {
  data(){
    return{
      user: {
        name: '',
        lastName: '',
        birthDate: '',
        termsConfirmed: false,
      },
      validation: {
        name: null,
        lastName: null,
        birthDate: null,
        termsConfirmed: null
      },
  isChecked: false,
    }
  },
methods: {
    termsAccepted(value){
    this.user.termsConfirmed = value;
  },
      nameValidation() {
      let re = /([A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+[ ]*)+/;
      const result = re.test(this.user.name);
      if (result === true) {
        this.validation.name = true;
        return true;
      } else this.validation.name = false;
      return false;
    },

    lastNameValidation() {
      let re = /([A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+[ ]*)+/;
      const result = re.test(this.user.lastName);
      if (result === true) {
        this.validation.lastName = true;
        return true;
      } else this.validation.lastName = false;
      return false;
    },

    ageValidation() {
      const userBD = this.user.birthDate;

      const re = /^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/;

      if (re.test(userBD)) {
        const dateParts = userBD.split("-");
        const currentDate = new Date();

        if (currentDate.getFullYear() - dateParts[0] < 18) {
                  this.validation.birthDate = false;
          return false;
        }

        if (currentDate.getFullYear() - dateParts[0] == 18) {
          if (currentDate.getMonth() + 1 < dateParts[1]) {
                    this.validation.birthDate = false;
            return false;
          }
          if (currentDate.getMonth() + 1 == dateParts[1]) {
            if (currentDate.getDate() < dateParts[2]) {
                      this.validation.birthDate = false;
              return false;
            }
          }
        }
        this.validation.birthDate = true;
        return true;
      } else {
        this.validation.birthDate = false;
        return false;
      }
    },

    termsValidation() {
      if (this.user.termsConfirmed === true) {
        this.validation.termsConfirmed = true;
        return true;
      } else this.validation.termsConfirmed = false;
      return false;
    },



    submitStepTwo(){
      this.nameValidation();
      this.lastNameValidation();
      this.ageValidation();
      this.termsValidation();
      this.$emit('sendData', this.user, this.validation); 
    },
},
}
</script>
<style scoped>

   </style>