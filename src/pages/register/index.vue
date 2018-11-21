<template>
	<div class="main-content">
		<div class="form-content">
			<div class="form-item blue">
				<div class="lable-txt">用户姓名</div>
				<div class="input-box">
					<input class="reg-input" type="text" placeholder-style="color:#ffffff" placeholder="请输入姓名" />
				</div>				
			</div>
			<div class="form-item">
				<div class="lable-txt">详细地址</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入详细地址" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">发票讯息</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入发票讯息" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">产品编号</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入产品编号" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">出售单位</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入出售单位" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">出售地址</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入出售地址" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">购琴价格</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入购琴价格" />
				</div>				
			</div>
			<div class="form-item">
				<div class="lable-txt">购琴日期</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入购琴日期" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">选购钢琴的原因</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入选购钢琴的原因" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">使用者年龄</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入使用者年龄" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">使用者类别</div>
				<div class="input-box">
					<input class="reg-input" type="text"  placeholder="请输入使用者年龄" />
				</div>				
			</div>

		</div>
		
		



	</div>

</template>

<script>
import {queryByBrand,queryBySn} from './srevice.js'	
	export default {
		data() {
			return {

			}
		},

		methods: {},
		onReady() {},
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #fff;
		box-sizing: border-box;
		padding-bottom: 30px;
		min-height: 100vh;
	}
	.form-content{
		height: auto;
		.form-item{
			padding:0 40px;
			&.blue{
				background: #519fff;
				padding-bottom: 10px;
				.lable-txt{
					color: #fff;
				}
				.input-box{
					border-bottom: 1px solid #fff;
				}
				.reg-input{
					color: #fff;
				}
			}
			.lable-txt{
				width: 100%;
				height: 30px;
				line-height: 50px;
				text-align: left;
				font-size: 12px;
				color: #333333;
			}
			.input-box{
				height: 40px;
				line-height: 40px;
				width: 100%;
				border-bottom: 1px solid #aaaaaa;
				.reg-input{
					height: 40px;
					line-height: 40px;
					border: none;
					outline: none;
					font-size: 18px;
				}
			}
			
		}
	}
	

	
</style>