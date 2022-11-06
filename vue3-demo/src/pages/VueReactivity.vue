<template>
  <button @click="increment">累加</button>
  <button @click="decrease">缩减科目</button>
  <button @click="addLevel">等级上升</button>
  <p>当前等级：{{ level }}</p>
  <p>所属大学:{{ college.name }}</p>
  <form action="#">
    <input type="text" v-model="state.form.name" />
    <input type="number" v-model="state.form.age" />
  </form>
  <div>
    <ul>
      <li>{{ state.count }}</li>
      <li>{{ state.form.name }}</li>
      <li>{{ state.form.age }}</li>
    </ul>
  </div>
  <div>
    <ul>
      <li v-for="item in state.project" :key="item">{{ item }}</li>
    </ul>
  </div>
  <!-- 这个地方的example.foo是ref对象，因此无法正常实现计算 -->
  <p>{{ example.foo + 1 }}</p>
  <!-- 展示为1 -->
  <p>{{ example.foo }}</p>
  <!-- foo作为顶层属性，在模板中调用的时候会自动解包 -->
  <p :data-foo="foo + 1">{{ foo + 1 }}</p>
  <button :disabled="example.isTrue ? true : false">
    {{ example.isTrue ? "true" : "false" }}
  </button>
</template>

<!-- <script>
//reactuve响应式对象
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({ count: 0 });
    function increment() {
      state.count++;
    }
    return {
      state,
      increment,
    };
  },
};
</script> -->
<!-- setup适用于单文件组件 -->
<script setup>
import { reactive, ref } from "vue";
let source = {
  count: 0,
  // 深层次监听
  form: {
    name: "张三",
    age: "20",
  },
  project: ["数学", "语文", "英语"],
};
// reactive只能处理对象的响应式
const state = reactive({ ...source });
console.log(state, state.count, "reactive"); //输出的分别是proxy对象，0，'reactive'
const level = ref(0);
console.log(level, "level"); //输出的是ref对象
const college = ref({
  name: "HK",
});
// ref不是顶层属性
const example = {
  foo: ref(1),
  isTrue: ref(true),
};
// 手动结构，fooTemp为顶层属性
const { foo } = example;
let temp = state;

// ref被嵌套在响应式对象中时，作为属性被访问或更改时，会自动解包
const count = ref(0);
const state2 = reactive({
  count,
});
console.log(state2.count, "count"); //输出的是0，自动解包
function increment() {
  state.count++;
  // 按照引用的方式访问，会触发响应式
  temp.count++;
  source.count--;
  // false，因为两者一个是对象，一个是proxy
  console.log(source === state);
}
function decrease() {
  state.project = ["数学", "语文"];
}
function addLevel() {
  level.value++;
}
</script>

<style></style>
