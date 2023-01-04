<template>
  <div>
    <my-input
      placeholder="这是我的input组件"
      @change="onChange"
      class="input"
      id="my-input"
    />
  </div>
</template>

<script setup>
import MyInput from "../components/base/MyInput.vue";
function onChange(value) {
  console.log(value);
}
</script>

<style lang="scss" scoped>
.input {
  color: black;
}
</style>