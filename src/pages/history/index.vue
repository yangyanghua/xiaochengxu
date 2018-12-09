<template>
	<div class="main-content">

		<div class="tabel-body">
			<ul class="t-header">
				<li class="h-item" >服务日期</li>
				<li class="h-item" >服务项目</li>
				<li class="h-item" >详细资料</li>
			</ul>
		
		<div class="data-list">

			<ul class="info-list" v-for="(item,index) in data" :key="index" >
				<li class="info-item" >{{item.maintainDate}}</li>
				<li class="info-item" >{{item.itemName}}</li>
				<li class="info-item btn" @tap="linkTo(item.maintainId)" >查看</li>
			</ul>

		</div>

			
		</div>
	




	

	</div>

</template>

<script>
	import { getServerList } from './srevice.js';

	export default {
		data() {
			return {
				data:[],
				form:{
					pageIndex:0,
					pageSize:100
				}
			}
		},

		methods: {
			linkTo(id){
				console.log(id);
				wx.navigateTo({
						url: '../record/main?id='+id
					})
				
			},			
			_getServerList(opt){
				wx.showLoading({
					title: '数据加载中...',
				})				
				getServerList(opt).then((res)=>{
					wx.hideLoading();
					this.data = res
					
				}).catch((res)=>{
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})						
				})
				
			}
		
		},

		onReady() {
			this._getServerList(this.form);
		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #F8F8F8;
		min-height: 100vh;
		box-sizing: border-box;
		padding-top: 10px;
	}
	
	.tabel-body{
		position: relative;
		width: 96%;
		min-height: 200px;
		margin: auto;
		overflow: hidden;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0 2px 15px 0 rgba(208,208,208,0.50);
		border-radius: 4px;		
		padding: 10px;
		.t-header{
			width: 100%;
			height: 40px;
			display: flex;
			.h-item{
				flex: 1;
				color: #000;
				font-size: 16px;
				line-height: 40px;
				text-align: center;
				overflow: hidden;
				box-sizing: border-box;
			}
		}
	}
	.tabel-body::after{
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		background:#519FFF;
		top: -13px;
		left: -13px;
		transform: rotateZ(45deg);
	}
	
	
	.data-list{
		width: 100%;
		height: auto;
		
		.info-list{
			height: 30px;
			width: 100%;
			display: flex;
			.info-item{
				flex: 1;
				position: relative;
				line-height: 30px;
				box-sizing: border-box;
				padding: 0 5px;
				font-size: 12px;
				color: #000;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
				&.btn{
					color: #519FFF;
				}
			}
			
		}
		
	}

</style>