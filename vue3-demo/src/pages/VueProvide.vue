<template>
  <div>
    <my-input v-model="content" />
    <vue-inject></vue-inject>
  </div>
</template>

<script setup>
import VueInject from "../components/grammar/VueInject.vue";
import MyInput from "../components/base/MyInput.vue";
import { provide, ref } from "vue";
const content = ref("message");
function updateMessage(value) {
  content.value = value;
}
provide("message", {
  updateMessage,
  content,
});
</script>

<style lang="scss" scoped>
</style>