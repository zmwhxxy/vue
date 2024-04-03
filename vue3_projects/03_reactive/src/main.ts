// 引入vue库中的createApp函数用于创建应用
import { createApp } from "vue";

// 引入App根组件作为createApp函数的参数
import App from "./App.vue";

// 调用createApp函数以App组件为参数创建一个应用
// 并挂载到index.html页面内对应id为'app'的文档组件内。
createApp(App).mount('#app');