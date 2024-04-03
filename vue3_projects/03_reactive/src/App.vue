
<template>
    <!-- 组件结构 html -->
    <div class="app">
        <!-- <h1>你好啊</h1> -->
        <Car/>
    </div>

</template>

 
<script lang="ts">
    import Car from './components/Car.vue'


    // 组件脚本：js 或者 ts
    export default {
        name:'App', //组件名：App

        components: { //注册子组件
            Car
        }
    }
</script>


<style>
/* 组件样式：层叠样式表 */
.app {
    background-color: aqua;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>