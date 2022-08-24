<template>
<div class="content-container">
   <h1>Good job <span>{{name}}!</span></h1>
      <div class="text">
         <p>We have sent you an email to <strong> {{email}} </strong></p>
         <p>Make sure to click the link from the message to activate your account.</p>
      </div>
      <base-button type="button" class="btn btn-primary"><a class="additional-text" href="/index.html">Go to homepage</a></base-button>
      </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
export default{
props: ['name', 'email'],
}

BaseButton</script>

<style scoped>
.content-container {
   margin-top: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

.text {
   margin: 20px;
   font-size: 1.2rem;
   line-height: 1.4rem;
}

span, strong {
   color: var(--primary-color);
}

a{
   color: white;
}
</style>