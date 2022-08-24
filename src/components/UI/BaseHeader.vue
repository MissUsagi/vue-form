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
</style>