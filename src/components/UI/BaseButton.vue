<template>
      <button :type="type" :class="mode">
         <slot></slot>
      </button>
</template>

<script>
export default {
   props: ['type', 'mode']
}
</script>

<style scoped>

 .btn{
   cursor: pointer;
   text-align: center;
   width: 228px;
   padding: 20px;
   font-family: 'Roboto Mono', monospace;
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 100%;
   border: none;
   border-radius: 64px;
   }
   
   .btn-primary{
   background: var(--primary-color);
   color: white;
   }
   
   .btn-primary:hover{
   background: var(--primary-dark);
   }

   .btn-primary:active{
      outline: none ! important;
      padding: 15px;
      border: 5px solid #F47073;
   }
   
   .btn-secondary{
   background: #FFFFFF;
   color: var(--primary-color);
   } 

   .btn-transparent {
      background: rgba(255, 255, 255, 0);
      color: var(--primary-color);
   }   
   .btn{
   cursor: pointer;
   text-align: center;
   width: 228px;
   padding: 20px;
   font-family: 'Roboto Mono', monospace;
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 100%;
   border: none;
   border-radius: 64px;
   }
   
   .btn-primary{
   background: var(--primary-color);
   color: white;
   }
   
   .btn-primary:hover{
   background: var(--primary-dark);
   }

   .btn-primary:active{
      outline: none ! important;
      padding: 15px;
      border: 5px solid #FD5E04;
   }
   
   .btn-secondary{
   background: #FFFFFF;
   color: var(--primary-color);
   }

   </style>