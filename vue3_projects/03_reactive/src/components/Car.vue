
<template>
    <div class="car">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="growUp">涨价10万</button>
        <button @click="dropDown">降价10万</button>
        <br>
        <h2>Games List</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{game.name}}</li>
        </ul>

        <!-- 使用 v-html 指令来渲染 rawHtml -->
        <div v-html="rawHtml"></div>

    </div>
</template>


<script lang="ts">
    export default {
        name: 'Car'
    } 
</script>

<script lang="ts" setup>
    import {reactive} from 'vue'

    // 把普通对象转化为交互式对象使用reactive函数
    let car = reactive ({brand: '奔驰', price: 100})
    let games = [
        {id:'11', name:'sanguozhi'},
        {id:'22', name:'yuanshen'}
    ]

     // 这是要渲染的 HTML 字符串，出于安全考虑，确保这是可信的内容，避免XSS攻击
     let rawHtml = '<h1>Vue 3 & v-html</h1><p>这是通过v-html指令渲染的内容。</p>'



    function growUp() {
        car.price += 10;
    }

    function dropDown() {
        if (car.price > 10) {
            car.price -= 10;
        }
    }
</script>


<style scoped>
    button {
        margin-right: 10px;
        margin-left: 10px;
    }
    .car {
        
    }
</style>