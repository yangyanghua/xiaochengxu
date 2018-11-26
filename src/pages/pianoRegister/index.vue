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

			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">使用者类别</div>
				<div class="input-box lin-input">
					<div class="img-box" @tap="userTypeSelect" >
						<image src="../../static/img/icon_drop_down2x.png" class="down-more" />
					</div>
				</div>				
			</div>


			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">是否满意</div>
				<div class="input-box lin-input">
						<div class="roid-box">
							<div class="roid-item"><image src="../../static/img/icon_yes2x.png" class="roid-img" />是</div>
							<div class="roid-item"><image src="../../static/img/icon_no2x.png" class="roid-img" />否</div>
						</div>
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">意见建议</div>
				<div class="input-box textarea-box">
					<textarea name="textarea" rows="5" class="reg-textarea" cols=""></textarea>
				</div>				
			</div>

		</div>
		
		<button class="submit-btn"  hover-class="active" @tap="submitData" >提交</button>



	</div>

</template>

<script>
import {queryByBrand,queryBySn} from './srevice.js'	
	export default {
		data() {
			return {

			}
		},

		methods: {
			userTypeSelect(){
				wx.showActionSheet({
				  itemList: ['学生', '老师', '演奏家','专家','音乐爱好者'],
				  success (res) {
				    console.log(res)
				  },
				  fail (res) {
				    console.log(res.errMsg)
				  }
				})				
			}
			
		},
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
			padding:0 25px;
			&.lin-form-item{
				margin-top: 20px;
				height: 40px;
			}
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
				&.lin-lable{
					float: left;
					width: 24%;
					line-height: 40px;
					height: 40px;
				}
				
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
					color: #999999;
					font-size: 18px;
				}
				&.textarea-box{
					width: 100%;
					border: none;
					background: #F8F8F8;
					height: auto;
					.reg-textarea{
						margin-top: 10px;
						width: 100%;
						box-sizing: border-box;
						font-size: 14px;
						color:#999999;
						padding: 5px;
						line-height: 20px;
					}
				}
				&.lin-input{
					position: relative;
					float: right;
					width: 75%;
					background: #F8F8F8;
					border: none;
					.img-box{
						position: absolute;
						width: 30px;
						height: 40px;
						text-align: center;
						line-height: 40px;
						background: #EEEEEE;
						top: 0;
						right: 0;
						
					}
					.down-more{
						height: 26px;
						width: 26px;
						margin-top: 10px;
					}
				}
				.roid-box{
					height: 40px;
					line-height: 40px;
					width: 100%;
					background: #fff;
					.roid-item{
						position: relative;
						height: 40px;
						width: 40px;
						float: left;
						line-height: 40px;
						padding-left: 40px;
						margin-right: 15px;
						font-size: 12px;
						color: #333;
						.roid-img{
							position: absolute;
							height: 18px;
							width: 18px;
							top: 50%;
							margin-top: -8px;
							left: 15px;
						}
					}
				}
			}
			
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
			margin-top: 40px;
			&.active {
				opacity: 0.8;
			}
		}			
</style>