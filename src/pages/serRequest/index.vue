<template>
	<div class="main-content">

		<div class="top-half">
			<div class="btn">
				猜一猜我的需求
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
							搬运
						</li>	
						<li class="opt-item" >
							<div class="check-box"></div>
							维修
						</li>						
						<li class="opt-item" >
							<div class="check-box"></div>
							其他
						</li>
					</ul>
				</div>
		</div>
	
	<div class="bot-half">
		<div class="title">
			最爱时段
		</div>
		
		<div class="time-box" @tap="openDate" >
			<div class="tiem-val">2018/12/06</div>
			<div class="ampm">上午
				<image class="down-img" src="../../static/img/icon_triangle_down2x.png" />
				
			</div>
		</div>
		
		
	</div>
		<div class="dateSelectBox" v-bind:class="{'show':dateSelectShow}">
			<div class="dateSelect">
				<div class="btnBox">
					<span class="closeBtn datebtn" @tap="seleDateColse">取消</span>
					<p class="nowdate">日期选择</p>
					<span class="selectBtn datebtn" @tap="confirmSele">确定</span>
				</div>
				<picker-view indicator-style="height: 50px;" style="width: 100%; height: 300px; text-align: center; " :value="value" @change="bindChange">

					<picker-view-column>
						<view v-for="(item,index) in years" :key="index" style="line-height: 50px">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view v-for="(item,days) in months" :key="index" style="line-height: 50px">{{item}}月</view>
					</picker-view-column>
					
					<picker-view-column>
						<view v-for="(item,index) in days" :key="index" style="line-height: 50px">{{item}}日</view>
					</picker-view-column>				
					<picker-view-column>
						<view v-for="(item,index) in ampm" :key="index" style="line-height: 50px">{{item}}</view>
					</picker-view-column>
				</picker-view>
			</div>
		</div>


	

	</div>

</template>

<script>
	import { getDetail } from './srevice.js';
	const date = new Date()
	const hours = []
	const mins = []
	let y =  date.getFullYear()
	let m = date.getMonth()+1;
	let d = date.getDate();
	let h = date.getHours();
	let min = date.getMinutes();
	let value = [0, m, d-1, 1];
	let years = [];
	let days = [];
	let months = [];
	for(let i = y; i < y+3 ; i++ ){
		years.push(i);		
	};

	for(let i = 1; i <= 31 ; i++ ){
		let num = i;
		if(num < 10) {
			num = '0' + i;
		};		
		days.push(num);
	};
	
	for(let i = 1; i <= 12 ; i++ ){
		let num = i;
		if(num < 10) {
			num = '0' + i;
		};		
		months.push(num);
	};	
	
	export default {
		data() {
			return {
				dateSelectShow:false,
				years:years,
				months:months,
				days:days,
				value:value,
				ampm:['上午','下午']
			}
		},

		methods: {
			openDate(){
				this.dateSelectShow = true;
			},
			bindChange(){
				
			},
			seleDateColse(){
				this.dateSelectShow = false;
			},
			confirmSele(){
				
			}
		
		},

		onReady() {

		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #fff;
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
	}
	.top-half{
		padding-top: 20px;
		width: 100%;
		height: 220px;
		background: #fff;
		
	}
	.btn{
		height: 40px;
		width: 60%;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		border: 1px solid #eee;
		color: #15B1FF;
		margin: auto;
		border-radius:100px;
		
	}
		.options-content{
			width: 100%;
			.opt-list{
				width: 100%;
				margin-top: 15px;
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
	.bot-half{
		width: 100%;
		height: auto;
		border-top:10px solid #f8f8f8 ;
		box-sizing: border-box;
		padding:0 10px;
		
		.time-box{
			
			width: 100%;
			height: 60px;
			margin-top: 5px;			
			background: #FFFFFF;
			box-shadow: 0 2px 15px 0 rgba(208,208,208,0.50);
			border-radius: 10px;
			display: flex;
			.tiem-val{
				flex: 3;
				position: relative;
				line-height: 60px;
				text-align: center;
				font-size: 14px;
				color: #333;
				font-weight: 700;		
			}
			.tiem-val::after{
				position: absolute;
				content: '';
				width: 1px;
				height: 40px;
				top: 50%;
				margin-top: -20px;
				background: #eee;
				right: 0;
			}
			.ampm{
				flex: 2;
				position: relative;
				line-height: 60px;
				text-align: center;
				font-size: 14px;
				.down-img{
					position: absolute;
					height: 9px;
					width: 10px;
					top: 50%;
					margin-top: -3px;
					right: 30px;
				}
			}			
		}

	}

			.title {
				position: relative;
				height: 40px;
				line-height: 40px;
				color: #333;
				font-size: 14px;
				padding: 0 15px;
				font-weight: 700;
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
			

	
	.dateSelectBox {
		height: 0;
		width: 100vw;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10;
		transition: all 0.3s;
		background: rgba(0, 0, 0, .5);
		&.show {
			height: 100vh;
		}
		.dateSelect {
			background: #fff;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			.btnBox {
				position: relative;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EFEFEF;
				.datebtn {
					position: absolute;
					height: 40px;
					line-height: 40px;
					width: 80px;
					font-size: 14px;
				}
				.nowdate{
					font-size: 14px;
					text-align: center;
				}
				
				.closeBtn {
					top: 0;
					left: 10px;
					text-align: left;
				}
				.selectBtn {
					top: 0;
					right: 10px;
					color:#58A1FF;
					text-align: right;
				}
			}
		}
	}
			

</style>