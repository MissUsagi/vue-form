<template>
<div class="form-group">
          <label :for="id">{{ label }}</label>
          <input
            :type="type"
            :id="id"
            :placeholder="placeholder"
            :value="modelValue"
            :autocomplete="autocomplete"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          <slot></slot>
</div>
</template>

<script>

export default {
props: {
   label: {
      type: String,
      default: ''
   },
      id: {
      type: String,
      default: ''
   },
      type: {
      type: String,
      default: ''
   },
      placeholder: {
      type: String,
      default: ''
   },
   modelValue: {
      type: [String, Number],
      default: ''
   },
     autocomplete: {
      type: [String],
      default: ''
   }
},
}
</script>

<style scoped>  
 .form-group{
   display: flex;
   flex-direction: column;
   margin-bottom: 24px;
   }
   
   .form-group label {
   text-align: left;
   height: 18px;
   font-family: 'Roboto Mono', monospace;
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 18px;
   text-transform: uppercase;
   color: var(--secondary-color);
   margin-bottom: 12px;
   }
   
   .form-group input {
   background-color: #f7f7f7;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 18px;
   color: var(--light-gray);
   border: none;
   border-radius: 8px;
   height: 56px;
   padding: 24px;
   width: 100%;
   }</style>