<template>
  <div>
    <h1>这是组件化页面</h1>
    <div>
      <h2>评分组件</h2>
      <Rate :value="score" theme="orange" @update-rate="update" />
      <RateNew v-model="score" theme="yellow">评分</RateNew>
      <span>评分是{{ score }}</span>
    </div>
    <div>
      <h2>todoList组件</h2>
      <TodoList />
    </div>
    <div>
      <h2>Count</h2>
      <Count />
    </div>
  </div>
</template>
<script setup>
import Rate from "../components/Rate.vue";
import RateNew from "../components/RateNew.vue";
import TodoList from "../components/TodoList.vue";
import Count from "../components/Count.vue";
import { ref } from "vue";
let score = ref(3.5);
function update(num) {
  score.value = num;
}
</script>
