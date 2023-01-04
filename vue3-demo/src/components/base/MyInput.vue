<template>
  <div class="wrap" id="input">
    <span>{{ text }}</span>
    <input
      type="text"
      class="input"
      ref="input"
      v-model="value"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', value)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 声明组件的props
const props = defineProps({
  placeholder: {
    type: String,
    default: "请输入",
  },
  text: {
    type: String,
    default: "输入框",
  },
  modelValue: {
    type: String,
    default: "这是默认值",
  },
});
const emits = defineEmits(["change", "update:modelValue"]);

const value = ref(props.modelValue);
const input = ref(null);
onMounted(() => {
  input.value.focus();
  emits("change", value.value);
});
</script>

<style lang="scss" scoped>
.input {
  border: 0px;
  padding: 4px 8px;
  background-color: lightblue;
}
</style>