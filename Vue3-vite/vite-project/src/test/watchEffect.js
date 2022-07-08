import { reactive, computed, watchEffect } from "vue";
// reactive基于Proxy
let obj = reactive({
  count: 1,
});
// 
let double = computed(() => obj.count * 2);
obj.count = 2;
// 初始化的时候自动收集依赖，当数据发生变化的时候触发执行
watchEffect(() => {
  console.log("数据被修改了", obj.count, double.value);
});
obj.count = 3;
