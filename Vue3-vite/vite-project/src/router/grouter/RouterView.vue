<template>
  <component :is="comp"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "../grouter/index";
let router = useRouter();
const comp = computed(() => {
  // 计算属性监听当前url变化，加载对应的component
  const route = router.routes.find((route) => {
    return route.path === router.current.value;
  });
  return route ? route.component : null;
});
</script>

<style></style>
