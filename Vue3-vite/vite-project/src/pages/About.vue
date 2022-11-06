<template>
  <h1 @click="toggle">这是关于页面</h1>
  <Heading :level="1">this is heading</Heading>
  <JSXComponent></JSXComponent>
</template>
<script setup>
import { useFullscreen } from "@vueuse/core";
import Heading from "../components/Heading.jsx";
import JSXComponent from "../components/JSXComponent.jsx";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
