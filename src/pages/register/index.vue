<template>
	<div class="main-content">		
	<div class="input-box account">
		<image src="../../static/img/icon_user2x.png" class="input-icon" />
		<input class="input-text" placeholder="请输入手机号码" type="text"  />
	</div>

	<div class="input-box psd">
		<image src="../../static/img/icon_verification_code2x.png" class="input-icon" />
		<input class="input-text" type="password"  placeholder="请输入验证码"  />
		<span class="txt-btn">获取验证码</span>
	</div>

	<div class="input-box psd">
		<image src="../../static/img/icon_password2x.png" class="input-icon" />
		<input class="input-text" type="password"  placeholder="请输入密码"  />
	</div>

	<button class="submit-btn"  hover-class="active" @tap="submitData" >立即注册</button>
	

	<div class="btn-box">
		   <image src="../../static/img/icon_success_fill2x.png" mode="aspectFit" class="check-icon" />    已阅读并同意 《<span class="txt-btn">用户服务协议</span>》
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
		background: #f8f9fb;
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
		padding-top: 20px;
	}

	
	.input-box{
		position: relative;
		height: 60px;
		line-height: 60px;
		width: 314px;
		margin: auto;
		border-radius:100px;
		padding:0 45px;
		box-sizing: border-box;
		margin-bottom: 30px;
		box-shadow: 0 1px 16px -7px #000;
		&.psd{
			padding-right: 100px;
		}
		.input-icon{
			position: absolute;
			height: 22px;
			width: 22px;
			left: 15px;
			top: 50%;
		
			margin-top: -11px;
		}
		.input-text{
			width: 100%;
			height: 60px;
			line-height: 60px;
			border: none;
			font-size: 14px;
			outline: none;
		}
		.txt-btn{
			position: absolute;
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			color: #58a1ff;
			top: 50%;
			margin-top: -15px;
			right: 20px;
		}
	}

			.submit-btn {
			background: #58a1ff;
			color: #fff;
			width: 314px;
			height: 60px;
			box-shadow: 0 1px 16px -7px #58a1ff;
			line-height: 60px;
			font-weight: 700;
			box-sizing: border-box;
			border-radius: 100px;
			&.active {
				opacity: 0.8;
			}
		}	
		
		.line-text{
			position: relative;
			margin-top: 10px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			width: 100%;
			font-size: 16px;
			color: #999;
			font-weight: 700;
			&::after{
				position: absolute;
				content: '';
				height: 1px;
				background: #999;
				width: 122px;
				top: 50%;
				left: 35px;
			}
			&::before{
				position: absolute;
				content: '';
				height: 1px;
				background: #999;
				width: 122px;
				top: 50%;
				right: 35px;
			}			
		}
		
		.btn-box{
			
			height: 30px;
			line-height: 30px;
			width: 314px;
			margin: auto;
			margin-top: 20px;
			text-align: center;
			font-size: 14px;
			.check-icon{
				position: relative;
				height: 15px;
				width: 16px;
				top: 3px;
				margin-right: 5px;
			}
			.txt-btn{
				
				text-decoration: underline;
				color: #58a1ff;				
			}
		}
</style>