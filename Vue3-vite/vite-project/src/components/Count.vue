<template>
  <div @click="add">
    <p>{{ count }}</p>
  </div>
  <p>{{ double }}</p>
  <button @click="asyncAdd">async add</button>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// import { useStore } from "../sotre/gvuex";
let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);
let add = () => {
  store.commit("add");
};
function asyncAdd() {
  store.dispatch("asyncAdd");
}
</script>
