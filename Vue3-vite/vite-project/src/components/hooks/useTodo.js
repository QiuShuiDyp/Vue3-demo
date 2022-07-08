// ref,computed不依赖于this上下文，可以单独引用
import { ref, computed, watchEffect } from "vue";
import useStorage from "./useStorage";
// todos逻辑封装
function useTodos() {
  // 新增todo的内容
  let title = ref("");
  let todos = useStorage("todos", []);
  let showModal = ref(false);
  // 移除
  function removeTodo(e, i) {
    todos.value.splice(i, 1);
  }
  function addTodo() {
    if (title.value === "") {
      showModal.value = true;
      // 自动关闭提示
      setTimeout(() => {
        showModal.value = false;
      }, 1500);
      return;
    }
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }

  // 清除已经完成的任务
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }

  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (val) {
      todos.value.forEach((todo) => {
        todo.done = val;
      });
    },
  });
  watchEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  });
  return { title, todos, addTodo, clear, active, all, allDone, showModal };
}

export default useTodos;
