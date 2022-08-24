<template>
<header>
   <h1>{{ heading }} 
   <br>
      <span> {{ subheading }} </span>
   </h1>
</header>
</template>

<script>
export default{
props: ['heading', 'subheading'],
}
</script>

<style>
header {
   text-align: left;
}
   h1 {
      font-family: 'Eczar', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 80px;
      line-height: 102%;
      letter-spacing: -0.01em;
      color: #343541;
      }
   span {color: var(--primary-color);}

   
   @media(max-width: 768px) {
     h1 {
         font-size: 3.5rem;
         text-align: left;
         
     }
   }

    @media(max-width: 500px) {
     h1 {
         font-size: 2.6rem;
         text-align: left;
         word-wrap: break-word;        
     }
   }
</style>