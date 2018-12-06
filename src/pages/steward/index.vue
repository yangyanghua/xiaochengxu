<template>
	<div class="main-content">
		<official-account></official-account>
		<div class="top-bar">

			<div class="piano-info">
				<div class="piano-img-box">
					<image class="pianoImg" :src="{{piano.imageUrl}}" />
				</div>
				<div class="piano-txt">
					<p class="model">型号：{{piano.model}}</p>
					<p class="number">序列号：{{piano.serialNo}}</p>
					<div class="status">保养等级： <span class="statusMark">{{piano.levelName}}</span>
						<image class="statusImg" src="../../static/img/icon_v32x.png" /> </div>
				</div>
				<div class="chioosPiano">
					<div class="chioosBtn">
						<image class="chioosBtn-img" src="../../static/img/icon_choose2x.png" />
					</div>
				</div>

			</div>

		</div>

	


		<div class="bot-content">
			
			<div class="environment">

				<div class="env-item tem">
					<div class="env-title">
						<image class="env-img" src="../../static/img/icon_temperature2x.png" />
						温度
					</div>
					<div class="value">
						25<span class="iocn-txt" >℃</span>
					</div>
					<p class="statusMark">正常</p>
					
				</div>

				<div class="env-item hum">
					<div class="env-title">
						<image class="env-img" src="../../static/img/icon_humidity2x.png" />
						湿度		
					</div>
					<div class="value">
						25<span class="iocn-txt" >%</span>
					</div>
					<p class="statusMark">超湿</p>
				</div>

			</div>
		

			<div class="info-content">

				<div class="title">
					上次维护：<span class="sub-title">2017年11月17日</span>
				</div>
				
				<div class="btn-box">
					<div class="btn">
						<div class="submit-btn" >智能分析我的需求</div>
					</div>
					<div class="btn">
						<div class="plain-btn"  >提出请求</div>
					</div>
					
				</div>
				
				
				<div class="options-content">
					<ul class="opt-list">
						<li class="opt-item" >
							<div class="check-box"></div>
							调律
						</li>
						<li class="opt-item" >
							<div class="check-box"></div>
							整音
						</li>
						<li class="opt-item" >
							<div class="check-box"></div>
							检查
						</li>
						<li class="opt-item" >
							<div class="check-box"></div>
							清洁
						</li>
						<li class="opt-item" >
							<div class="check-box"></div>
							调整
						</li>
						<li class="opt-item" >
							<div class="check-box"></div>
							其他
						</li>
					</ul>
				</div>
				
				

			</div>

		</div>

	</div>

</template>

<script>
	import { myPianoList, myPianoInfo,humidity,temperature } from './srevice.js'
	export default {
		data() {
			return {
				piano:{},
				hInfo:{},
				tInfo:{},
				data:[],
			}
		},

		methods: {
			linkTo(path){
				wx.navigateTo({
						url: '../'+path+'/main'
					})
				
			},
			_myPianoInfo(id){
				
				myPianoInfo({id:id}).then((res)=>{
					this.piano = res;
				}).catch((res)=>{
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})						
				})
				
			},
			_humidity(id){
				
				humidity({id:id}).then((res)=>{
					this.hInfo = res;
				}).catch((res)=>{
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})						
				})
				
			},
			_temperature(id){
				
				temperature({id:id}).then((res)=>{
					this.tInfo = res;
				}).catch((res)=>{
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})					
				})
				
			},
			_myPianoList(){
				myPianoList().then((res)=>{
					if(res.length==0){
						wx.showModal({
						  title: '提示',
						  showCancel:false,
						  content: '请先为您的钢琴注册!',
						  success (res) {
						    if (res.confirm) {
								wx.switchTab({
								  url: '../index/main'
								})						      
						    } else if (res.cancel) {

						    }
						  }
						})						
					}else{
						let pid = res[0].pianoId;
						this._myPianoInfo(pid);
						this._myPianoInfo(pid);
						this._myPianoInfo(pid);
						
					}
					
				}).catch((res)=>{
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})						
				})
				
			}
			
			
			
		},
		onShow() {
			let vm = this;
				wx.getStorage({
					key: 'pid',
					success: function(res) {
						let pid = res;
						vm._myPianoInfo(pid);
					},
					fail:function(){
						vm._myPianoList();
					}
				})			
			
		},		
		onReady() {
			
			
			
		},
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
		height: 70px;
		width: 100%;
		text-align: center;
		background: #58a1ff;
		.piano-info {
			position: absolute;
			height: 100px;
			width: 96%;
			top: 20px;
			left: 50%;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 8px;
			margin-left: -48%;
			background: #FFFFFF;
			box-shadow: 0 2px 15px 0 rgba(208, 208, 208, 0.50);
			display: flex;
			.piano-img-box {
				flex: 1.2;
				padding: 5px;
				box-sizing: border-box;
				.pianoImg {
					height: 100%;
					width: 100%;
				}
				;
			}
			.piano-txt {
				flex: 3;
				text-align: left;
				box-sizing: border-box;
				padding-left: 10px;
				.model {
					font-size: 14px;
					color: #333;
					height: 30px;
					line-height: 30px;
				}
				.number {
					height: 20px;
					line-height: 20px;					
					font-size: 12px;
					color: #666;
				}
				.status {
					position: relative;
					height: 20px;
					line-height: 20px;					
					font-size: 12px;
					margin-top: 5px;
					color: #666;
					.statusMark {
						font-size: 16px;
						color: #1E90FF;
					}
					.statusImg {
						position: absolute;
						top: -4px;
						height: 34px;
						width: 40px;
						margin-left: 15px;
					}
				}
			}
			.chioosPiano {
				flex: 1;
				.chioosBtn {
					margin-top: 5px;
					height: 30px;
					width: 30px;
					float: right;
					.chioosBtn-img {
						height: 20px;
						width: 20px;
					}
				}
			}
		}
	}
	
	.bot-content {
		margin-top: 60px;

		.environment{
			width: 96%;
			height: 130px;
			margin: auto;
			.env-item{
				width: 48%;
				height: 130px;
				background: #FFFFFF;
				box-shadow: 0 2px 15px 0 rgba(208,208,208,0.50);
				border-radius: 8px;
				overflow: hidden;
				.env-title{
					position: relative;
					height: 40px;
					line-height: 40px;
					width: 100%;
					text-align: center;
					font-size: 18px;
					color: #fff;
					.env-img{
						position: absolute;
						top: 50%;
						left: 20px;
					}
				}
				
				.value{
					margin-top: 10px;
					width: 100%;
					text-align: center;
					height: 50px;
					line-height: 50px;
					font-size: 40px;
					.iocn-txt{
						font-size: 20px;
					}
				}
				.statusMark{
					width: 100%;
					height: 30px;
					line-height: 20px;
					text-align: center;
					font-size: 14px;
					color: #999999;
				}
				&.tem{
					float: left;
					.env-title{
						background: #FF9D34;
						.env-img{
							height: 30px;
							width: 16px;
							margin-top: -15px;
						}						
					}
					.value{
						color:#FF9D34 ;
					}
				}
				&.hum{
					float: right;
					.env-title{
						background: #519FFF;
						.env-img{
							height: 22px;
							width: 22px;
							margin-top: -11px;
						}							
					}
					.value{
						color:#519FFF;
					}
				}				
			}
			
			
			
		}


		.info-content {
			width: 96%;
			height: auto;
			padding-bottom: 20px;
			background: #fff;
			border-radius: 8px;
			box-shadow: 0 0 15px -7px #000;
			margin: auto;
			margin-top: 10px;
			.title {
				position: relative;
				height: 40px;
				line-height: 40px;
				color: #333;
				font-size: 14px;
				padding: 0 15px;
				.sub-title{
					font-size: 12px;
					color: #666;
				}
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

		}
	}
	
		.submit-btn {
			background: #58a1ff;
			color: #fff;
			width: 80%;
			height: 40px;
			line-height: 40px;			
			font-size: 14px;
			border:1px solid #58A1FF;
			margin: auto;
			border-radius: 100px;
			&.active {
				opacity: 0.8;
			}
		}	
		
		.plain-btn{
			background: none;
			color: #999;
			width: 80%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			margin: auto;
			color: #58a1ff;
			border: 1px solid #EEEEEE;
			border-radius: 100px;
			font-size: 14px;
			&.active {
				opacity: 0.8;
				
			}			
			
		}
		
		
		.btn-box{
			width: 100%;
			height: 40px;
			margin-top: 10px;
			display: flex;
			.btn{
				flex: 1;
				text-align: center;
				
			}
		}

		.options-content{
			width: 100%;
			.opt-list{
				width: 100%;
				margin-top: 30px;
				height: auto;
				.opt-item{
					position: relative;
					display: inline-block;
					width: 50%;
					box-sizing: border-box;
					height: 36px;
					line-height: 36px;
					font-size: 14px;
					color: #333;
					text-align: center;
				}
				.check-box{
					position: absolute;
					height: 16px;
					width: 16px;
					border: 1px solid #eee;
					border-radius:4px;
					top: 50%;
					margin-top: -8px;
					left: 28%;
					background: #fff;
				}
			}
			
			
			
		}




	
</style>