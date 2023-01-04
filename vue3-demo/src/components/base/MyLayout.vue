<template>
  <div>
    <header><slot name="header" color="red"> 这是header </slot></header>
    <main><slot> 这是main </slot></main>
    <footer><slot name="footer">这是footer</slot></footer>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  width: 100%;
}
.main {
  height: 80px;
  width: 100%;
}
.footer {
  height: 80px;
  width: 100%;
}
</style>