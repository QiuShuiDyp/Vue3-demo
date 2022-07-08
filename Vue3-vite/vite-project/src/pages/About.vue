<template>
  <h1 @click="toggle">这是关于页面</h1>
</template>
<script setup>
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
