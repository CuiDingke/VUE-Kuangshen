<template>
  <div id="app">
<!--    <h1>Vue-Router</h1>-->
<!--    <router-link to="/main">首页</router-link>-->
<!--    <router-link to="/Content">内容页</router-link>-->
<!--    <RouterLink to="/HelloWorld">Hello</RouterLink>-->


<!--    //展示Vue模板-->
    <router-view></router-view>
<!--    <HelloWorld/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Content from "./components/Content";

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
