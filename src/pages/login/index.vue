<template>
	<div class="main-content">
	
	<div class="header">
		<div class="user-photo">
			<open-data type="userAvatarUrl"></open-data>
		</div>
	</div>
		
	<div class="input-box account">
		<image src="../../static/img/icon_user2x.png" class="input-icon" />
		<input class="input-text" placeholder="请输入手机号码" type="text"  />
	</div>

	<div class="input-box psd">
		<image src="../../static/img/icon_password2x.png" class="input-icon" />
		<input class="input-text" type="password"  placeholder="请输入密码"  />
		<span class="txt-btn">忘记密码</span>
	</div>

	<button class="submit-btn"  hover-class="active" @tap="submitData" >登录</button>
	
	<div class="line-text">
		O&nbsp;R
	</div>
	<div class="btn-box">
		<span class="txt-btn checkCode">短信验证码登录</span>
		<span class="txt-btn reg">注册</span>
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
	.header{
		height: 140px;
		width: 100%;
		box-sizing: border-box;
		.user-photo{
			height: 110px;
			width: 110px;
			margin: auto;
			overflow: hidden;
			border-radius:50%;
			box-shadow: 0 2px 13px -3px #000;
		}
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
			.txt-btn{
				font-size: 14px;
				color: #58a1ff;
				font-size: 14px;
				text-decoration: underline;
				&.checkCode{
					float: left;
				}
				&.reg{
					float: right;
				}
			}
		}
</style>