<template>
  <div class="search-input">
    <img class="select-icon" :src="require('../assets/img/icon_search.svg')" />
    <input
      class="select-input"
      type="text"
      @change="onChange"
      v-model="currentValue"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits, watch } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
// data
let currentValue = ref(props.value);
watch(props.value, (value) => {
  currentValue = value;
});

// 事件
const emit = defineEmits(["change"]);

function onChange(value) {
  debounce(() => {
    emit("change", value);
  }, 300);
}

// watch

// methods
const debounce = (function () {
  let timer = 0;
  return function (fn, delay = 300) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(), delay);
  };
})();
</script>

<style lang="less">
@import "~/common/css/tailwind.css";
.search-input {
  .select-input {
  }

  .select-icon {
  }
}
</style>
