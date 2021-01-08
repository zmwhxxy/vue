<template>
	<!-- 组件模版内容 -->
	<div>
		<slot name="begin" v-bind:cValue="cValue" :user="user" >
			默认内容
		</slot>
		
		<button>
			子组件
			<slot>center默认内容</slot>
		</button>
		<slot name="end">end默认内容</slot>
	</div>
</template>

<script>
	export default {
		// 组件名
		data () {
			return {
				cValue: "内部内容",
				user: {
					firstName: 'wang',
					lastName: 'zhirui'
				}
			}
		},
		// 对外开发的属性
		props:[],
		//组件生命周期函数
		created() {
			
		},
		// 组件内部方法
		methods: {
			
		}
	}
</script>

<style>
</style>
