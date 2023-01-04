<template>
  <div>
    <my-layout>
      <template #header="slotProps">
        {{ `这是header区域，子组件的color是${slotProps.color}` }}
      </template>
      <span>main</span>
      <template #footer>footer</template>
    </my-layout>
  </div>
</template>

<script setup>
import MyLayout from "../components/base/MyLayout.vue";
</script>

<style lang="scss" scoped>
</style>