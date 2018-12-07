<template>
	<div class="main-content">

		<div class="tabel-body">
			<ul class="t-header">
				<li class="h-item" >乐器名称</li>
				<li class="h-item" >型号</li>
				<li class="h-item" >序列号</li>
				<li class="h-item address" >存放地址</li>
			</ul>
		
		<div class="data-list">

			<ul class="info-list" v-for="(item,index) in data" :key="index" @tap="select(item.pianoId)" v-bind:class="{'active':item.pianoId==pid}" >
				<li class="info-item" >{{item.brandCN}}</li>
				<li class="info-item" >{{item.model}}</li>
				<li class="info-item" >{{item.serialNo}}</li>
				<li class="info-item address" >{{item.address}}</li>
			</ul>



		</div>

			
			
			
		</div>
	




	

	</div>

</template>

<script>
	import { myPianoList } from './srevice.js';

	export default {
		data() {
			return {
				data:[],
				pid:'',
			}
		},

		methods: {
			select(pid){
				
						this.pid = pid;
						wx.setStorage({
							key: 'pid',
							data: pid,	
							success: function(res) {
								
								wx.navigateBack({
								    delta: 1
								})							
								
							},
							fail:function(){
							}
						})				
				
			},
			_myPianoList(){
				myPianoList().then((res)=>{
					
					this.data = res;
					
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
			let vm = this;
				wx.getStorage({
					key: 'pid',
					success: function(res) {
						vm.pid = res.data;
					},
					fail:function(){
						
					}
				})				
			this._myPianoList();
			
		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #F8F8F8;
		min-height: 100vh;
		box-sizing: border-box;
	}
	
	.tabel-body{
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 10px;
		.t-header{
			width: 100%;
			height: 30px;
			display: flex;
			.h-item{
				flex: 1;
				background: #58A1FF;
				color: #fff;
				font-size: 14px;
				line-height: 30px;
				text-align: center;
				overflow: hidden;
				box-sizing: border-box;
				border-right:1px solid #F8F8F8;
				&.address{
					flex: 1.8;
				}
			}
		}
	}
	.data-list{
		width: 100%;
		height: auto;
		
		.info-list{
			position: relative;
			height: 60px;
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0 2px 15px 0 rgba(208,208,208,0.50);
			border-radius: 4px;
			overflow: hidden;
			margin-top: 10px;
			display: flex;
			&.active::after{
				position: absolute;
				content: '';
				height: 30px;
				width: 30px;
				background: #519FFF;
				top: -15px;
				left: -15px;
				transform: rotateZ(45deg);
			}
			
			.info-item{
				flex: 1;
				position: relative;
				line-height: 60px;
				box-sizing: border-box;
				padding: 0 5px;
				font-size: 12px;
				color: #000;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
				&.address{
					flex: 1.8;
				}
				&.address::after{
					display: none;
				}
			}
			.info-item::after{
				position: absolute;
				content: '';
				width: 1px;
				height: 30px;
				top: 50%;
				background: #eee;
				margin-top: -15px;
				right: 0;
			}
			
		}
		
	}

</style>