<template>
  <button @click="onClick">隐藏/显示attribute placeholder</button>
  <!-- disabled因为值为假值，所以该属性会被Vue忽略 -->
  <input type="text" v-model="value" :placeholder="placeholder" :disabled="0" />
</template>

<script>
export default {
  data() {
    return {
      value: "",
      placeholder: "请输入",
    };
  },
  methods: {
    onClick() {
      console.log("attribute 为null时，会移除改attribute");
      if (this.placeholder) {
        this.placeholder = null;
      } else {
        this.placeholder = "请输入";
      }
    },
  },
};
</script>

<style></style>
