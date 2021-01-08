<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	
	<!-- 使用自定义组件HelloWorld -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	
  </div>
</template>

<script>
	
// 导入HelloWorld.vue文件并命名为HelloWorld变量
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld	//注册HelloWorld变量为组件
  },
  data() {
	  return {
		  title: 'Hello'
	  }
  }
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
