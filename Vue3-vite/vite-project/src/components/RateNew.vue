<template>
  <div :style="fontStyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span
        @mouseOver="mouseOver(num)"
        @click="onRate(num)"
        v-for="num in 5"
        :key="num"
        >☆</span
      >
      <span class="hollow" :style="fontWidth">
        <span
          @mouseover="mouseOver(num)"
          @click="onRate(num)"
          v-for="num in 5"
          :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
// defineProps可以用来声明组件的props，同时可以限制其范围
let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: "orange" },
});
// width初始化
let width = ref(props.modelValue);
let emits = defineEmits(["update:modelValue"]);
function mouseOver(i) {
  width.value = i;
}

function onRate(num) {
  emits("update:modelValue", num);
}

// 鼠标离开的时候展示默认指定的评分
function mouseOut() {
  width.value = props.modelValue;
}
// em相对当前元素的字号
const fontWidth = computed(() => {
  return `width:${width.value}em`;
});

const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};

const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]}`;
});
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
}

.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
