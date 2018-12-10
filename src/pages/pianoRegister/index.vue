<template>
	<div class="main-content">
		<div class="form-content">
			<div class="form-item blue">
				<div class="lable-txt">用户姓名</div>
				<div class="input-box">
					<input class="reg-input" type="text" v-model="form.userName" style="color: #fff;"  placeholder-style="color:#ffffff" placeholder="请输入姓名" />
				</div>				
			</div>
			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">存放地址</div>
				<div class="input-box lin-input">
					<p class="value-txt">{{region[0]}}{{region[1]}}{{region[2]}}</p>
					<div class="img-box">
						<view class="section">
						  <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
						    <view class="picker">
						      <image src="../../static/img/icon_drop_down2x.png" class="down-more" />
						    </view>
						  </picker>
						</view>
					</div>
				</div>				
			</div>			

			<div class="form-item">
				<div class="lable-txt">存放详细地址</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="regionDetail"  placeholder="请输入详细地址" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">发票信息</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="form.invoiceNo"  placeholder="请输入发票信息" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">产品编号</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="form.serialNo"  placeholder="请输入产品编号" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">出售单位</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="form.dealer"  placeholder="请输入出售单位" />
				</div>				
			</div>

			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">出售地址</div>
				<div class="input-box lin-input">
					<p class="value-txt">{{region1[0]}}{{region1[1]}}{{region1[2]}}</p>
					<div class="img-box">
						<view class="section">
						  <picker mode="region" @change="bindRegionChange1" :value="region1" :custom-item="customItem">
						    <view class="picker">
						      <image src="../../static/img/icon_drop_down2x.png" class="down-more" />
						    </view>
						  </picker>
						</view>
					</div>
				</div>				
			</div>	

			<div class="form-item">
				<div class="lable-txt">出售详细地址</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="regionDetail1"  placeholder="请输入出售地址" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">购琴价格（元）</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="form.priceCN"  placeholder="请输入购琴价格" />
				</div>				
			</div>

			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">购琴日期</div>
				<div class="input-box lin-input">
					<p class="value-txt">{{form.saleDate}}</p>
					<div class="img-box" >
						<view class="section">
						  <picker mode="date" :value="date" start="2015-09-01" end="2045-09-01" @change="bindDateChange">
						    <view class="picker">
								<image src="../../static/img/icon_drop_down2x.png" class="down-more" />
						    </view>
						  </picker>
						</view>						
					</div>
				</div>				
			</div>


			<div class="form-item">
				<div class="lable-txt">选购钢琴的原因</div>
				<div class="input-box">
					<input class="reg-input" type="text"  v-model="form.reason"  placeholder="请输入选购钢琴的原因" />
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">使用者年龄</div>
				<div class="input-box">
					<input class="reg-input" type="number"  v-model="form.userAge"  placeholder="请输入使用者年龄" />
				</div>				
			</div>

			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">使用者类别</div>
				<div class="input-box lin-input">
					<p class="value-txt">{{userType[form.userType]}}</p>
					<div class="img-box" @tap="userTypeSelect" >
						<image src="../../static/img/icon_drop_down2x.png" class="down-more" />
					</div>
				</div>				
			</div>


			<div class="form-item lin-form-item">
				<div class="lable-txt lin-lable">是否满意</div>
				<div class="input-box lin-input">
						<div class="roid-box">
							<div class="roid-item" @tap="handelClick(1)" >
								<image v-if="form.satisfied===1" src="../../static/img/icon_yes2x.png" class="roid-img" />
								<image v-if="form.satisfied===0" src="../../static/img/icon_no2x.png" class="roid-img" />
								是
							</div>
							<div class="roid-item" @tap="handelClick(0)" >
								<image v-if="form.satisfied===0" src="../../static/img/icon_yes2x.png" class="roid-img" />
								<image v-if="form.satisfied===1" src="../../static/img/icon_no2x.png" class="roid-img" />
								否
							</div>
						</div>
				</div>				
			</div>

			<div class="form-item">
				<div class="lable-txt">意见建议</div>
				<div class="input-box textarea-box">
					<textarea name="textarea" rows="5"  v-model="form.suggestion" class="reg-textarea" cols=""></textarea>
				</div>				
			</div>

		</div>
		
		<div class="submit-btn"  v-if="!loading"  hover-class="active" @tap="submitData" >提交</div>
		<div class="submit-btn active" v-if="loading"  hover-class="active" >提交</div>


	</div>

</template>

<script>
import {pianoRegister} from './srevice.js';

	export default {
		data() {
			return {
			    region: ['广东省', '广州市', '海珠区'],
			    regionDetail:'',
			    region1: ['广东省', '广州市', '海珠区'],
			    regionDetail1:'',
			    customItem: '',
				date:[],
				userType:['学生', '老师', '演奏家','专家','音乐爱好者'],
				loading:false,				
				form:{
					invoiceNo:'',
					userName:'',//	使用者姓名
					userAddress:'',//	存放地址
					userAge:'',//	使用者年龄
					userType:'',//['学生', '老师', '演奏家','专家','音乐爱好者'],
					serialNo:'',//	产品序号
					dealer:'',//		经销商
					saleAddress:'',//	
					priceCN:'',//	
					saleDate:'',//销售日期(yyyy-MM-dd)
					reason:'',//	购买原因
					satisfied:1,//	是否满意(0：否 1：是)
					suggestion:'',				
				}
			}
		},

		methods: {
			  bindDateChange(e){

			  	this.form.saleDate = e.mp.detail.value;
			  	this.date =  e.mp.detail.value;
			  	
			  },
			  bindRegionChange (e) {

			  	this.region = e.mp.detail.value;

			  },
			  bindRegionChange1(e){
			  	this.region1 = e.mp.detail.value;
			  },
			submitData(){
				if(!this.form.userName){
					wx.showToast({title: '请输入使用者姓名',icon: 'none',duration: 2000});
					return false;
				};

				if(!this.regionDetail){
					wx.showToast({title: '请输入详细存放地址',icon: 'none',duration: 2000});
					return false;
				};
				
				if(!this.form.invoiceNo){
					wx.showToast({title: '请输入发票信息',icon: 'none',duration: 2000});
					return false;
				};				
				
				if(!this.form.serialNo){
					wx.showToast({title: '请输入产品编号',icon: 'none',duration: 2000});
					return false;
				};					
				
				if(!this.form.dealer){
					wx.showToast({title: '请输入出售单位',icon: 'none',duration: 2000});
					return false;
				};	

				if(!this.regionDetail1){
					wx.showToast({title: '请输入详细出售地址',icon: 'none',duration: 2000});
					return false;
				};	

				if(!this.form.priceCN){
					wx.showToast({title: '请输入钢琴价格',icon: 'none',duration: 2000});
					return false;
				};

				if(!this.form.saleDate){
					wx.showToast({title: '请选择购琴日期',icon: 'none',duration: 2000});
					return false;
				};

				if(!this.form.saleDate){
					wx.showToast({title: '请选择购琴日期',icon: 'none',duration: 2000});
					return false;
				};

				this.form.userAddress = this.region[0] + this.region[1] + this.region[2] + this.regionDetail;
				this.form.saleAddress = this.region1[0] + this.region1[1] + this.region1[2] + this.regionDetail1;
				
				this._pianoRegister(this.form);


			},
			_pianoRegister(opt){
				this.loading = true;
				wx.showLoading({
					title: '数据提交中...',
				})
				
				pianoRegister(opt).then((res)=>{
					this.loading = false;
					wx.hideLoading();	
					wx.showToast({title:'注册成功！',icon: 'success',duration: 2000});
					setTimeout(function(){
						wx.switchTab({
						  url: '../index/main'
						});						
					},1500)					
					
				}).catch((res)=>{
					wx.hideLoading();	
					this.loading = false;	
					wx.showToast({title: res.msg,icon: 'none',duration: 2000});
				})
				
				
			},
			
			handelClick(index){
				this.form.satisfied = index;
			},		
			userTypeSelect(){
				let vm = this;
				wx.showActionSheet({
				  itemList: ['学生', '老师', '演奏家','专家','音乐爱好者'],
				  success (res) {

				    vm.form.userType =  res.tapIndex;
				    
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
					font-size: 14px;
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
					font-size: 14px;
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
					.value-txt{
						font-size: 14px;
						box-sizing: border-box;
						padding:0 10px;
						color: #999;
					}
					.down-more{
						position: absolute;
						top: 10px;
						left: 50%;
						margin-left: -13px;
						height: 26px;
						width: 26px;
					
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
			height: 40px;
			text-align: center;
			box-shadow: 0 1px 16px -7px #58a1ff;
			line-height: 40px;
			font-size: 14px;
			border: 1px solid  #58a1ff;
			box-sizing: border-box;
			border-radius: 100px;
			margin: auto;
			margin-top: 40px;
			&.active {
				opacity: 0.8;
			}
		}				
</style>