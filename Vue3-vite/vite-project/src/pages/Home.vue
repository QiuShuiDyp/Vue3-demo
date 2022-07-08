<template>
  <div>
    <h1>这是首页</h1>
    <!-- <TodoList /> -->
    <!-- <span>监听坐标({{ x }},{{ y }})</span> -->
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>
<script setup>
import { ref } from "vue";
// import TodoList from "../components/TodoList.vue";
// import { useMouse } from "../utils/mouse";
let count = ref(1);
let color = ref("red");
// let { x, y } = useMouse();

function add() {
  count.value++;
  color.value = Math.random() > 0.5 ? "blue" : "red";
}
</script>
<style scoped>
h1 {
  /* color: red; */
  color: v-bind(color);
}
</style>
