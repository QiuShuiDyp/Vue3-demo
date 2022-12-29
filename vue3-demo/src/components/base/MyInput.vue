<template>
  <input
    type="text"
    class="input"
    ref="input"
    v-model="value"
    :placeholder="placeholder"
    @change="$emit('change', value)"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
defineProps(["placeholder"]);
defineEmits(["change"]);
const value = ref("");
const input = ref(null);
onMounted(() => {
  input.value.focus();
});
</script>

<style lang="scss" scoped>
.input {
  border: 0px;
  padding: 4px 8px;
  background-color: lightblue;
}
</style>