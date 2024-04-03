
<template>
    <div>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click = "changeName">修改名字</button>
        <button @click = "changeAge">修改年龄</button>
        <button @click = "showTel">查看联系方式</button>
        <hr>
        
    </div>
</template>


<script lang="ts">
    export default {
        name: 'Person'
    }
</script>

<script lang="ts" setup>
    //ref 响应式的数据用ref函数
    import {ref} from 'vue'

   let name = ref("张三");
   let age = ref(18);
   let tel = 13888888888;

    function changeName() {
        name.value = "李四";
        console.log(name.value); 
    }

    function changeAge() {
        age.value += 1;
        console.log(age.value);
    }

    function showTel() {
        alert("点击这里查看电话号码");
    }
</script>


<style>
    button {
        margin-right: 10px;
    }
</style>