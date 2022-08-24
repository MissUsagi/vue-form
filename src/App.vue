<template>
<div class=app-container>
<!-- <the-header heading="Hello!" subheading="Care to register?"></the-header> -->
<the-form></the-form>
</div>
</template>

<script>
// import TheHeader from './components/TheHeader.vue'
import TheForm from './components/Form/TheForm.vue';

export default {
  name: 'App',
  components: {
    TheForm, 
    // TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Roboto&family=Roboto+Mono:wght@500;700&display=swap');
:root {
   --primary-color: #FC5503;
   --primary-dark: #CF3605;
   --secondary-color: #2F0A7B;
   --additional-color: #5B0FAC;
   --light-gray: #85868d;
   --dark-gray: #343541;
   }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

   *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   }
   
   body {
   font-family: 'Roboto', sans-serif;
   background: #fff;
   height: 100vh;
   }

   a {
    text-decoration: none;
   }
 .primary-text {
  color: var(--primary-color);
}

 .additional-text {
  color: var(--additional-color);
}
   .app-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
   }
   
   .error-info {
    text-align: left;
    margin: 10px 0 5px 0;
    font-size: 0.8rem;
    color: var(--primary-dark);
    text-align: start;
   }

   .error-input {
    border: 2px solid var(--primary-dark);
   }
</style>
