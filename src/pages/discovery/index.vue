<template>
	<div class="main-content">
		<official-account  ></official-account>
		<div class="top-bar">
			<image class="top-iocn" src="../../static/img/erc.jpg" />

			<div class="form-content">
				<div class="form-item">
					<div class="input-box">
						<input class="seachInput" placeholder="钢琴品牌" />
					</div>
					<div class="btn-box">
						<image class="seach-iocn" src="../../static/img/seach1.png" />
					</div>
				</div>
				<div class="form-item">
					<div class="input-box">
						<input class="seachInput" placeholder="钢琴编号" />
					</div>
					<div class="btn-box" @tap="codeTest" >
						<image class="seach-iocn" src="../../static/img/code.png" />
					</div>
				</div>

			</div>

		</div>

		<div class="bot-content">

			<button class="submit-btn" hover-class="active">开始查询</button>

			<div class="info-content">

				<div class="title">
					查询结果
				</div>
				<ul class="info">
					<li class="info-item">
						<div class="lable-txt">
							钢琴品牌：
						</div>
						<div class="value-txt">
							珠江
						</div>
					</li>

					<li class="info-item">
						<div class="lable-txt">
							钢琴描述：
						</div>
						<div class="value-txt">
							珠江XXX直立式A20E
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴颜色：
						</div>
						<div class="value-txt">
							黑色
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴生产商：
						</div>
						<div class="value-txt">
							广州珠江钢琴制造有限公司
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴经销商：
						</div>
						<div class="value-txt">
							雅乐琴行
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴经销商商业登记号：
						</div>
						<div class="value-txt">
							A21313R5321321321TDSF2
						</div>
					</li>
				</ul>

			</div>

		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				motto: 'Hello World',
				userInfo: {}
			}
		},

		methods: {
			test(val){
				console.log(val);
			},
			codeTest(){

				wx.scanCode({
				  success (res) {
				    console.log(res);
				    
				  }
				})

			}
			
		},

		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #f8f8f8;
		box-sizing: border-box;
		padding-bottom: 30px;
		min-height: 100vh;
	}
	
	.top-bar {
		position: relative;
		height: 190px;
		width: 100%;
		text-align: center;
		background: #58a1ff;
		.top-iocn {
			height: 90px;
			width: 90px;
			margin-top: 10px;
			border-radius: 50%;
		}
		.form-content {
			position: absolute;
			bottom: -85px;
			left: 50%;
			margin-left: -47%;
			width: 94%;
			height: 170px;
			background: #fff;
			border-radius: 8px;
			box-shadow: 0 0 15px -4px #000;
			.form-item {
				display: flex;
				height: 50px;
				line-height: 50px;
				width: 95%;
				overflow: hidden;
				border-radius: 100px;
				background: #f8f8f8;
				margin: auto;
				margin-top: 25px;
				.input-box {
					flex: 5;
					padding: 0 15px;
					.seachInput {
						text-align: left;
						height: 50px;
						line-height: 50px;
						font-size: 14px;
					}
				}
				.btn-box {
					position: relative;
					flex: 1.2;
					background: #58a1ff;
					.seach-iocn {
						position: absolute;
						height: 23px;
						width: 23px;
						top: 50%;
						margin-top: -10px;
						left: 50%;
						margin-left: -12px;
					}
				}
			}
		}
	}
	
	.bot-content {
		margin-top: 110px;
		.submit-btn {
			background: #58a1ff;
			color: #fff;
			width: 300px;
			border-radius: 100px;
			&.active {
				opacity: 0.8;
			}
		}
		.info-content {
			width: 94%;
			height: auto;
			padding-bottom: 20px;
			background: #fff;
			border-radius: 8px;
			box-shadow: 0 0 15px -4px #000;
			margin: auto;
			margin-top: 20px;
			.title {
				position: relative;
				height: 40px;
				line-height: 40px;
				color: #58a1ff;
				font-size: 14px;
				padding: 0 15px;
				font-weight: bold;
			}
			.title::after {
				position: absolute;
				content: '';
				height: 20px;
				width: 5px;
				top: 50%;
				margin-top: -9px;
				left: 0;
				background: #58a1ff;
			}
			.info {
				padding: 0 15px;
				width: 100%;
				box-sizing: border-box;
				.info-item {
					margin-bottom: 3px;
					box-sizing: border-box;
					.lable-txt {
						display: inline-block;
						font-size: 13px;
						color: #333;
						font-weight: bold;
					}
					.value-txt {
						display: inline-block;
						font-size: 13px;
						color: #333;
					}
				}
			}
		}
	}
</style>