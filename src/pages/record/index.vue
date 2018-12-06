<template>
	<div class="main-content">

		<div class="tabel-body">

		
		<div class="info-content">
			<ul class="info-list">
				<li class="info-item fw">钢琴型号：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item fw">钢琴序列号：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item fw">服务日期：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item fw">服务内容：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item fw">服务情况：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item">服务时的温湿度：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item">因湿度管理造成问题：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item">脚踏操作：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item">击弦机操作：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item">琴键键盘操作：<span class="value-txt">KAWAI23</span></li>
				<li class="info-item">琴弦状况：<span class="value-txt">KAWAI23</span></li>
			</ul>
		</div>

	
			<div class="btn">
				历史记录
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
		padding: 10px 20px;

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
	
	.info-content{
		
		width: 100%;
		height: auto;
		.info-list{
			width: 100%;
			.info-item{
				padding: 5px 0;
				line-height: 22px;
				font-size: 14px;
				color: #000;
				&.fw{
					font-weight: 700;
				}
				.value-txt{
					margin-left: 10px;
					font-weight: normal;
					color: #519FFF;
				}	
			}
		}
		
		
	}

	.btn{
		
		height: 40px;
		width: 40%;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		border: 1px solid #519FFF;
		color: #fff;
		background:#519FFF;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 20px;
		border-radius:100px;
		
	}


</style>