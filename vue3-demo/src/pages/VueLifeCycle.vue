<template>
  <span>{{ count }}</span>
  <button @click="handleClick">按钮</button>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
  ref,
} from "vue";
const count = ref(0);
function handleClick() {
  count.value++;
}
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("mounted");
});
onBeforeUpdate(() => {
  console.log(count, "onBeforeUpdate");
});
onUpdated(() => {
  console.log(count, "updated");
});
onBeforeUnmount(() => {
  console.log(count, "onMounted");
});
onUnmounted(() => {
  console.log(count, "onUnmounted");
});
</script>

<style lang="scss" scoped>
</style>