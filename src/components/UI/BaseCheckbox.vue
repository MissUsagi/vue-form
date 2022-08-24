<template>
           <div class="checkbox">
          <input
            class="custom-checkbox"
            type="checkbox"
            :id="id"
            :name="name"
            v-model="checked" 
            @change="emitValue"
          />
          <span class="checkmark"></span>
          <label :for="id">
          <slot></slot></label>
        </div>
</template>

<script>
export default{
props: {
      id: {
      type: String,
      default: ''
   },
      name: {
      type: String,
      default: ''
   },
},
data(){
return{
  checked: false
}
},
methods: {
  emitValue(){
    this.$emit('isChecked', this.checked);
  }
},
  
}
</script>


<style scoped>
.checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
}
/* Custom checkbox */
.custom-checkbox {
  -webkit-appearance: none;
  border: 0.75px solid #aeaeb3;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  display: inline-block;
  position: relative;
}

.custom-checkbox:active,
.custom-checkbox:checked:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.custom-checkbox:checked {
  border: 2px solid var(--primary-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
    inset 15px 10px -12px rgba(255, 255, 255, 0.1);
  color: var(--primary-color);
}

.custom-checkbox:checked:after {
  content: "\2714";
  font-size: 15px;
  position: absolute;
  top: 0px;
  left: 4px;
  color: var(--primary-color);
}

.checkbox label {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 21px;
  /* margin-left: 35px; */
  font-size: 18px;
  text-transform: none;
  color: #292a33;
}

.checkbox a {
  text-decoration: underline;
}
</style>