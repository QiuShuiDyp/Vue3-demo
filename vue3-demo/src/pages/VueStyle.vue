<template>
  <div :class="{ 'is-white': isWhite, 'is-black': !isWhite, box: true }"></div>
  <button @click="changeBgColor">改变背景颜色</button>
  <MeInput placeholder="me-input"></MeInput>
</template>
<script setup>
import MeInput from "../components/base/MyInput.vue";
import { ref } from "vue";
const isWhite = ref(false);
const changeBgColor = function () {
  isWhite.value = !isWhite.value;
};
</script>
<style lang="scss" scoped>
.box {
  height: 100px;
  width: 100px;
}
.is-black {
  background-color: black;
  color: white;
}
.is-white {
  background-color: white;
  color: black;
}
</style>
