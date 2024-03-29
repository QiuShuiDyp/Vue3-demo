import { watchEffect, ref } from "vue";

function useStorage(name, value = "[]") {
  let data = ref(JSON.parse(localStorage.getItem("todos") || value));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}

export default useStorage;
