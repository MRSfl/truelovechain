<template>
	<div class="mheader">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div class="support" v-if='seller.supports'>
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count">
				<span>{{seller.supports.length}}</span>
			</div>
		</div>
		<div class="bulletin-wrapper"></div>
	</div>
</template>
<script type="text/javascript">
	import {getHeaderInfo} from 'api/api'
	export default{
		data(){
			return {
				seller:{},
				classMap:['decrease','discount','guarantee','invoice']
			}
		},
		created(){
			this._getHeaderInfo()
		},
		methods:{
			_getHeaderInfo(){
				getHeaderInfo().then((res)=>{
					if (res.status == 200) {
						console.log(res)
						this.seller = res.data.seller
					}
				})
			}
		}
	}
</script>
<style scoped>
	.mheader{
		color:#fff;
		background:black
	}
	.content-wrapper{
		display:flex;
		padding:24px 12px 18px 24px;
		align-items:center;
		position: relative;
	}
	.content{
		margin-left:16px
	}
	.title{
		display:flex;
		margin:2px 0 8px 0;
		align-items:center
	}
	.brand{
		width:30px;
		height:18px;
		display:inline-block;
		background:url(brand@2x.png) no-repeat center center;
		background-size:30px 18px
	}
	.name{
		margin-left:6px;
		font-size:16px;
		font-weight:700;
		color:rgba(255,255,255);
	}
	.description{
		font-size:12px;
		font-weight:200;
		margin-bottom:8px
	}
	.text{
		display:flex;
		font-size:10px;
	}
	.support{
		display: flex;
		flex-direction: row
	}
	.icon{
		width: 12px;
		height: 12px;
		margin-right:4px
	}
	.icon.decrease{
		background: url(decrease_2@2x.png) no-repeat center center;
		background-size:12px 12px 
	}
	.icon.discount{
		background: url(discount_2@2x.png) no-repeat center center;
		background-size:12px 12px 
	}
	.icon.guarantee{
		background: url(guarantee_2@2x.png) no-repeat center center;
		background-size:12px 12px 
	}
	.icon.invoice{
		background: url(invoice_4@2x.png) no-repeat center center;
		background-size:12px 12px 
	}
	
</style>