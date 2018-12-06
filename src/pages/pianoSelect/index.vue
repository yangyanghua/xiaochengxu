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

			<ul class="info-list">
				<li class="info-item" >KAWAI</li>
				<li class="info-item" >KU 123</li>
				<li class="info-item" >1234567</li>
				<li class="info-item address" >广东广州x街x楼x室</li>
			</ul>

			<ul class="info-list">
				<li class="info-item" >KAWAI</li>
				<li class="info-item" >KU 123</li>
				<li class="info-item" >1234567</li>
				<li class="info-item address" >广东广州x街x楼x室</li>
			</ul>

			<ul class="info-list">
				<li class="info-item" >KAWAI</li>
				<li class="info-item" >KU 123</li>
				<li class="info-item" >1234567</li>
				<li class="info-item address" >广东广州x街x楼x室</li>
			</ul>

		</div>

			
			
			
		</div>
	




	

	</div>

</template>

<script>
	import { getDetail } from './srevice.js';

	export default {
		data() {
			return {

			}
		},

		methods: {

		
		},

		onReady() {

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
			height: 60px;
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0 2px 15px 0 rgba(208,208,208,0.50);
			border-radius: 4px;
			margin-top: 10px;
			display: flex;
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