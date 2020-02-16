<template>
  <div>
    <div>Testing Input Text: {{ inputText }}</div>
    <input v-model="inputText" type="text">
  </div>
</template>
  
<script>
export default {
  name: "Demo",
  data() {
    inputText: ""
  }
}
</script>

<style scoped>

</style>