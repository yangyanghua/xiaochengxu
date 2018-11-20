<template>
	<div class="main-content">
		<official-account  ></official-account>
		<div class="top-bar">
			<div class="top-iocn">
				<image v-if="img" class="userImg" :src="img" />
			</div>

			<div class="form-content">
				<div class="form-item">
					<div class="input-box">
						<input class="seachInput" v-model="brand"  placeholder="钢琴品牌" />
					</div>
					<div class="btn-box">
						<image class="seach-iocn" src="../../static/img/seach1.png" />
					</div>
				</div>
				<div class="form-item">
					<div class="input-box">
						<input class="seachInput" v-model="pianoSn" placeholder="钢琴编号" />
					</div>
					<div class="btn-box" @tap="codeTest" >
						<image class="seach-iocn" src="../../static/img/code.png" />
					</div>
				</div>

			</div>

		</div>

		<div class="bot-content">

			<!--<button class="submit-btn" hover-class="active" @tap="submitData" >开始查询</button>-->
			<button class="submit-btn" v-if="!searchBtnShow"    open-type="getUserInfo" @getuserinfo="bindGetUserInfo">开始查询</button>
			<button class="submit-btn" v-if="searchBtnShow" hover-class="active" @tap="submitData" >开始查询</button>
			
			<div class="info-content" v-if="data.length > 0" >

				<div class="title">
					查询结果
				</div>
				<ul class="info" v-for="(item,index) in data" :key="index" >
					<li class="info-item">
						<div class="lable-txt">
							钢琴品牌：
						</div>
						<div class="value-txt">
							{{item.brand}}
						</div>
					</li>

					<li class="info-item">
						<div class="lable-txt">
							钢琴描述：
						</div>
						<div class="value-txt">
							{{item.des}}
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴颜色：
						</div>
						<div class="value-txt">
							{{item.color}}
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴生产商：
						</div>
						<div class="value-txt">
							{{item.factory}}
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴经销商：
						</div>
						<div class="value-txt">
							{{item.dealer}}
						</div>
					</li>
					<li class="info-item">
						<div class="lable-txt">
							钢琴经销商商业登记号：
						</div>
						<div class="value-txt">
							{{item.dealerSn}}
						</div>
					</li>
				</ul>



			</div>

		</div>

	</div>

</template>

<script>
import {queryByBrand,queryBySn} from './srevice.js'	
	export default {
		data() {
			return {
				userInfo: {},
				data:[],
				img:'',
				pianoSn:'',
				brand:'',
				searchBtnShow:false,
			}
		},

		methods: {
			bindGetUserInfo(e){
				// console.log(e.mp.detail.userInfo)
				 this.img  = e.mp.detail.userInfo.avatarUrl;
				 this.searchBtnShow = true;
			},
			submitData(){
				if(this.pianoSn){
					this._queryBySn({sn:this.pianoSn});	
				}else{
					this._queryByBrand({brand:this.brand});
				}
			},
			
			_queryBySn(opt){
				
				queryBySn(opt).then((res)=>{
					this.data = [res];
				}).catch((res)=>{
					wx.showToast({
						title: '网络错误',
						icon: 'none',
						duration: 2000
					})						
				})
				
			},
			
			_queryByBrand(opt){
				
				queryByBrand(opt).then((res)=>{
					
					this.data = res;
					
				}).catch((res)=>{
					wx.showToast({
						title: '网络错误',
						icon: 'none',
						duration: 2000
					})					
				})
			},

			
			codeTest(){

				wx.scanCode({
				  success (res) {
				    console.log(res);
				    
				  }
				})

			}
			
		},
		onReady() {
			let vm = this;
			wx.getSetting({
			  success(res) {
			    if (!res.authSetting['scope.userInfo']) {
			    	
			    	vm.searchBtnShow = false;
			    	
			    }else{
			          wx.getUserInfo({
			            success: function(res) {
			              //console.log(res.userInfo)
			              vm.img = res.userInfo.avatarUrl;
			            }
			          })
			    	vm.searchBtnShow = true;
			    }
			  }
			})		

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
		height: 190px;
		width: 100%;
		text-align: center;
		background: #58a1ff;
		.top-iocn {
			position: absolute;
			top: 10px;
			left: 50%;
			margin-left: -45px;
			height: 90px;
			width: 90px;
			box-shadow: 0 2px 15px -7px #000;
			background: #F8F8F8;
			overflow: hidden;
			border-radius: 50%;
			.userImg{
				height: 90px;
				width: 90px;				
			}
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
			box-shadow: 0 0 15px -7px #000;
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
			box-shadow: 0 0 15px -7px #000;
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
				padding-bottom: 7px;
				border-bottom:2px solid #F8F8F8;
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
			.info:last-child{
				border: none;
				padding-bottom: 0;
			}
		}
	}
</style>