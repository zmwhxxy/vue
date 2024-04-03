
<template>
<!-- 组件结构 html -->
<Person/>

</template>


<script lang="ts">
// 组件脚本：js 或者 ts
    import Person from "./components/Person.vue";

    export default {
        name:'App', //组件名：App
        components: {   //注册组件
            Person
        }
    }
</script>


<style>
/* 组件样式：层叠样式表 */

</style>