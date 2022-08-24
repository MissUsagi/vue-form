<template>
   <div class="container">
     <slot></slot> 
   </div>
</template>

<style>
   .container {
   display: flex;
   flex-direction: column;
   margin-top: 40px;
   padding: 64px;
   width: 600px;
   min-height: 500px;
   background: #FFFFFF;
   box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
   border-radius: 24px;
   }

   @media(max-width: 768px) {
      .container{
         width: 90vw;
         padding: 40px 30px;
      }
   }
      @media(max-width: 500px) {
      .container{
         padding: 3rem 1.5rem;
      }

}
   </style>