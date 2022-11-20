<!--
 * @Author: QiuShui
 * @Date: 2022-11-08 07:15:15
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-11-08 07:38:23
 * @FilePath: /vue3-demo/src/pages/VueWatch.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <input type="text" v-model="num1" />
  +
  <input type="text" v-model="num2" />
  ={{ result }}
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
const num1 = ref(0);
const num2 = ref(0);
const state = reactive({
  count: 0,
});
let arr = reactive([0])
// 计算属性
const result = computed(() => {
  return parseInt(num1.value || 0) + parseInt(num2.value || 0);
});
// 监听某个属性
watch(result, () => {
  if (result.value > 100) console.log(`${result.value}超过了100`);
});

// 监听多个属性
watch([num1, num2], ([newNum1, newNum2]) => {
  state.count++;
  arr = [...arr, state.count]
  // arr.push(state.count)
  console.log(parseInt(newNum1) * parseInt(newNum2));
});
// 监听getter函数,当监听响应式对象的属性值时，不能直接监听
// 需要通过getter函数的方式来监听，因为直接监听state.count是一个number
watch(
  () => state.count,
  (count) => {
    console.log(count, "count");
  }
);
// 监听响应式对象，会隐式地创建一个深层侦听器，当对象的属性发生改变的时候，触发侦听的回调。newVal，oldVal相等
watch(state, (newVal,oldVal)=>{
  console.log(state.count, newVal, oldVal,'state')
})
watch(arr,(newVal,oldVal)=>{
  console.log(arr, newVal, oldVal,'arr')
})
</script>

<style></style>
