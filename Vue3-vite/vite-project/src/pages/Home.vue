<template>
  <div>
    <h1>这是首页</h1>
    <Button @click="outClick" />
    <!-- <TodoList /> -->
    <!-- <span>监听坐标({{ x }},{{ y }})</span> -->
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Button from "../components/Button.vue";
let count = ref(1);
let color = ref("red");
onMounted(() => {
  // console.log(this.moment(new Date()).format("YYYY-MM-DD"));
});
function add() {
  count.value++;
  color.value = Math.random() > 0.5 ? "blue" : "red";
}
function outClick() {
  alert("this is outer");
}
</script>
<style scoped>
h1 {
  color: v-bind(color);
}
</style>
