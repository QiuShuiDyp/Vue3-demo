// JSX定义一个组件
import { defineComponent, h } from "vue";
export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    //h函数入参：标签名，prop或attribute，子节点
    return () => h("h" + props.level, {}, slots.default());
  },
});
