import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props) {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    // renturn 返回一个render函数
    return () => <div onClick={inc}>{count.value}</div>;
  },
});
