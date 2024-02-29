<template>
  <div>
    <div>
      <label v-bind:for="`input-${$_uid}`">{{ uid }}</label>
      <input v-bind:id="`input-${$_uid}`" />
    </div>
    or
    
    
  </div>
</template>
 
<script>
export default {
//   computed: {
//     id() {
//       return `input-${this.$_uid}`;  // e.g. input-1
//     },
//   },
// };
}
</script>