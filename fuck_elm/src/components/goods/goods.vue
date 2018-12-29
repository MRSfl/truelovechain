<template>
	<div class="goods">
		我是商品
	</div>
</template>
<script type="text/javascript">

	export default{
		data(){
			return {

			}
		},
		created(){
			//this.getGoodsList()
		},
		methods:{
			getGoodsList(){
				axios.get('https://mrsfl.github.io/truelovechain/data.json').then((res)=>{
					console.log(res)
				})
			}
		}
	}
</script>