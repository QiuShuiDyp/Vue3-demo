<template>
  <h1>Vue3 Learning Demo</h1>
  <div class="contain">
    <!-- 路由 -->
    <div class="left-content">
      <h2>基础语法</h2>
      <ul>
        <li><router-link to="/setup">Setup()</router-link></li>
        <li><router-link to="/vue-template">模板语法</router-link></li>
        <li><router-link to="/vue-reactive">响应式基础</router-link></li>
        <li><router-link to="/vue-watch">计算属性和侦听器</router-link></li>
        <li><router-link to="/vue-style">类与样式绑定</router-link></li>
        <li>
          <router-link to="/vue-life-cycle">生命周期钩子函数</router-link>
        </li>
        <li>
          <router-link to="/vue-components">组件</router-link>
        </li>
        <li>
          <router-link to="/vue-slots">插槽</router-link>
        </li>
        <li>
          <router-link to="/vue-provide">依赖注入</router-link>
        </li>
        <!-- <li><router-link to="/setup/script_setup">script setup</router-link></li> -->
      </ul>
    </div>
    <div class="right-content">
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => {
    return {
      msg: "消息",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  padding-left: 20px;
}
.header {
  height: 100px;
  width: 100%;
  background: lightgreen;
  display: flex;
  align-items: center;
}
.logo {
  height: 50px;
  width: 50px;
}
.item {
  padding: 20px;
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
ul li {
  text-align: left;
}

.contain {
  display: flex;
  height: 100vh;
}
.left-content {
  width: 200px;
  background-color: aquamarine;
  padding-left: 20px;
}
.right-content {
  width: 100%;
  padding: 20px;
  background-color: beige;
}
</style>
