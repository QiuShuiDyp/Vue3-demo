<template>
  <div>{{ message.content }}</div>
  <button @click="message.updateMessage(123)">修改message</button>
</template>

<script setup>
import { inject, onMounted } from "vue";
// 透传ref，保留响应式的特性
const message = inject("message", "这是默认信息");
onMounted(() => {
  console.log(message.value);
});
</script>

<style lang="scss" scoped>
</style>