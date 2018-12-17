<template>
	<div class="main-content">
		<official-account  ></official-account>
		<div class="top-bar">
			<div class="top-iocn">
				<image  class="userImg" src="../../static/img/illustration2x.png" />
			</div>

			<div class="form-content">
				<div class="form-item">
					<div class="input-box">
						<input class="seachInput" v-model="form.brandCN"  placeholder="钢琴品牌" />
					</div>
					<div class="btn-box">
						<image class="seach-iocn" src="../../static/img/search1.png" />
					</div>
				</div>
				<div class="form-item">
					<div class="input-box">
						<input class="seachInput" v-model="form.serialNo" placeholder="钢琴编号" />
					</div>
					<div class="btn-box" @tap="codeTest" >
						<image class="seach-iocn" src="../../static/img/code.png" />
					</div>
				</div>

			</div>

		</div>

		<div class="bot-content">

			<!--<button class="submit-btn" hover-class="active" @tap="submitData" >开始查询</button>-->
<!--			<button class="submit-btn" v-if="!searchBtnShow"    open-type="getUserInfo" @getuserinfo="bindGetUserInfo">开始查询</button>-->
			<button class="submit-btn"  :loading="loading" :disabled="loading" hover-class="active" @tap="submitData" >开始查询</button>
			
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
							{{item.brandEN}}--{{item.brandCN}}
						</div>
					</li>

					<li class="info-item">
						<div class="lable-txt">
							钢琴描述：
						</div>
						<div class="value-txt">
							{{item.desc==null? '' : item.desc }}
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
							{{item.producer}}
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
							{{item.dealerNo}}
						</div>
					</li>
				</ul>



			</div>

		</div>

	</div>

</template>

<script>
import {authenticity} from './srevice.js'	
	export default {
		data() {
			return {
				userInfo: {},
				data:[],
				loading:false,
				isLogin:false,
				form:{
					brandCN:'',
					serialNo:''
				},
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
				if(!this.isLogin){
					wx.showModal({
					  title: '提示',
					  content: '登录后才可以使用该功能',
					  confirmText:'立即登录',
					  confirmColor:'#519FFF',
					  success (res) {
					    if (res.confirm) {
					      
							wx.navigateTo({
									url: '../login/main'
								})	

					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }
					  }
					})	
					return false;
				};		
				if(!this.form.brandCN){
					wx.showToast({
						title: '请输入钢琴品牌',
						icon: 'none',
						duration: 2000
					})
					return false;
				};
				
				if(!this.form.serialNo){
					wx.showToast({
						title: '请输入钢琴序列号',
						icon: 'none',
						duration: 2000
					})
					return false;
				};				
				this._authenticity(this.form);
			},
			
			_authenticity(opt){
				this.loading = true;
				authenticity(opt).then((res)=>{
					this.loading = false;
					this.data = [res];
				}).catch((res)=>{
					this.loading = false;
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
		 onLoad: function(option){

		    let brand = option.brand;
		    this.form.brandCN = brand;
		    console.log(brand);
			let vm = this;
				wx.getStorage({
					key: 'isLogin',
					success: function(res) {
						vm.isLogin = res.data;
					},
					fail:function(){
						vm.isLogin = false;
					}
				})			    
		    
		    
		    
		    
		 },		
		onReady() {
			let vm = this;
			
			

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
			margin-left: -65px;
			height: 130px;
			width: 130px;
			.userImg{
				height: 130px;
				width: 130px;				
			}
		}
		.form-content {
			position: absolute;
			bottom: -95px;
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
		margin-top: 130px;
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