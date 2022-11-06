<template>
  <div>
    <h1>Setup Demo</h1>
    <p>msg: {{ msg }}</p>
    <!-- 省略.value -->
    <p>readsNumber: {{ readsNumber }}</p>
  </div>
</template>

<script>
import { toRefs, toRef, ref } from "vue";
export default {
  name: "SetUpFunction",
  props: {
    msg: {
      type: String,
      require: true,
    },
    name: {
      type: String,
    },
  },
  // 和选项式API一同使用时，才使用setup()
  setup(props, context) {
    // props不允许被解构，会影响响应式
    // const { msg } = props;
    const { msg } = toRefs(props);
    const { name } = toRef(props, "name");
    console.log(props.msg, "msg");
    console.log(msg, "msg");
    console.log(name, "name");
    const { attrs, slots, emit, expose } = context;
    console.log(attrs, slots, emit, expose, "123");
    const readsNumber = ref(0);
    return {
      readsNumber,
    };
  },
  mounted() {
    console.log(this.readsNumber, "readsNumber");
  },
};
</script>

<style>
li {
  text-align: left;
}
</style>
