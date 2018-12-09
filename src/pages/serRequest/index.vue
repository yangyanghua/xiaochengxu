<template>
	<section class="main">

		<div class="main-content" v-if="!success">

			<div class="top-half">
				<div class="btn" @click="guessMyNeed">
					猜一猜我的需求
				</div>

				<div class="options-content">
					<ul class="opt-list">
						<li class="opt-item" v-for="(item,index) in options" :key="index" @click="checkItem(item.code,index)">
							<div class="check-box" v-bind:class="{'active':item.checked}"></div>
							{{item.name}}
						</li>
					</ul>
				</div>
			</div>

			<div class="bot-half">
				<div class="title">
					最爱时段
				</div>

				<div class="time-box" @tap="openDate">
					<div class="tiem-val">{{showDate}}</div>
					<div class="ampm">{{ampm[formData.timeType]}}
						<image class="down-img" src="../../static/img/icon_triangle_down2x.png" />

					</div>
				</div>

				<button class="submit-btn" :loading="loading" :disabled="loading" hover-class="active" @tap="submitData">提出请求</button>

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
		<div class="main-content" v-if="success">

			<div class="dialog-box">
				<image class="header-img" src="../../static/img/pic_heart2x.png" />
				<p class="success-txt">我们已经收到您递交的资料，努力处理当中完成后我们会发送通知给您,感谢您对家中音乐大个子的照顾。</p>
				<div class="btn-box">
					<button class="submit-btn" hover-class="active" @tap="handelBack">确认</button>
				</div>
			</div>

		</div>

	</section>

</template>

<script>
	import { guessServer, submitServer } from './srevice.js';
	const date = new Date()
	const hours = []
	const mins = []
	let y = date.getFullYear()
	let m = date.getMonth() + 1;
	let d = date.getDate();
	let h = date.getHours();
	let min = date.getMinutes();
	let value = [0, m, d - 1, 1];
	let years = [];
	let days = [];
	let months = [];
	let showDate = y + '/' + m + '/' + d;
	for(let i = y; i < y + 3; i++) {
		years.push(i);
	};

	for(let i = 1; i <= 31; i++) {
		let num = i;
		if(num < 10) {
			num = '0' + i;
		};
		days.push(num);
	};

	for(let i = 1; i <= 12; i++) {
		let num = i;
		if(num < 10) {
			num = '0' + i;
		};
		months.push(num);
	};

	export default {
		data() {
			return {
				success: false,
				loading: false,
				dateSelectShow: false,
				years: years,
				months: months,
				showDate: showDate,
				days: days,
				value: value,
				ampm: ['上午', '下午'],
				formData: {
					date: '',
					timeType: 1,
					items: []
				},
				options: [{
						code: 0,
						name: '调律',
						checked: false
					},
					{
						code: 1,
						name: '检查',
						checked: false
					},
					{
						code: 2,
						name: '调整',
						checked: false
					},
					{
						code: 3,
						name: '维修',
						checked: false
					},
					{
						code: 4,
						name: '整音',
						checked: false
					},
					{
						code: 5,
						name: '清洁',
						checked: false
					},
					{
						code: 6,
						name: '搬运',
						checked: false
					},
					{
						code: 99,
						name: '其他',
						checked: false
					},
				]

			}
		},

		methods: {

			handelBack() {
				wx.navigateBack({
					delta: 1
				})
			},
			submitData() {
				if(this.formData.items.length == 0) {
					wx.showToast({
						title: '请选择服务项目',
						icon: 'none',
						duration: 2000
					});

					return false;

				};
				let obj  = Object.assign({},this.formData);
				obj.items = obj.items.join(',');
				this._submitServer(obj);
				
			},
			checkItem(code, index) {
				let idx = this.formData.items.indexOf(code);
				if(idx != -1) {
					this.formData.items.splice(idx, 1);
					this.options[index].checked = false;
				} else {
					this.formData.items.push(code);
					this.options[index].checked = true;
				};

			},
			guessMyNeed() {
				let vm = this;
				wx.showLoading({
					title: '需求分析中...',
				})
				guessServer().then((res) => {

					wx.hideLoading();
					this.formData.items = res;
					this.options.forEach((item) => {
						let idx = res.indexOf(item.code);
						if(idx != -1) {
							item.checked = true;
						}
					})
				}).catch((res) => {
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})
				})

			},
			openDate() {
				this.dateSelectShow = true;
			},
			bindChange(res) {

				this.value = res.mp.detail.value;
			},
			seleDateColse() {
				this.dateSelectShow = false;
			},

			confirmSele() {
				console.log(this.value);
				this.formData.date = this.years[this.value[0]] + '-' + this.months[this.value[1]] + '-' + this.days[this.value[2]];
				this.showDate = this.years[this.value[0]] + '/' + this.months[this.value[1]] + '/' + this.days[this.value[2]];
				this.formData.timeType = this.value[3];
				this.dateSelectShow = false;
			},
			_submitServer(opt) {

				submitServer(opt).then((res) => {
					this.success  = true;
				}).catch((res) => {

					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})

				})

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
		border-top:1px solid #fff;
		box-sizing: border-box;
	}
	
	.dialog-box {
		width: 90%;
		height: 330px;
		background: #FFFFFF;
		box-shadow: 0 2px 15px 0 rgba(208, 208, 208, 0.50);
		border-radius: 10px;
		margin: auto;
		margin-top: 30px;
		overflow: hidden;
		.header-img {
			width: 100%;
			height: 90px;
		}
		.success-txt {
				font-size: 14px;
				padding: 10px 40px;
				line-height: 32px;
				color: #000;
				text-align: left;
			}		
		.submit-btn {
			margin-top: 20px;
			width: 200px;
		}
	}
	
	.top-half {
		padding-top: 20px;
		width: 100%;
		height: 220px;
		background: #fff;
	}
	
	.btn {
		height: 40px;
		width: 60%;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		border: 1px solid #eee;
		color: #15B1FF;
		margin: auto;
		border-radius: 100px;
	}
	
	.options-content {
		width: 100%;
		.opt-list {
			width: 100%;
			margin-top: 15px;
			height: auto;
			.opt-item {
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
			.check-box {
				position: absolute;
				height: 16px;
				width: 16px;
				border: 1px solid #eee;
				border-radius: 4px;
				top: 50%;
				margin-top: -8px;
				left: 28%;
				background: #fff;
				&.active {
					background: #519FFF;
					border-color: #519FFF;
				}
			}
		}
	}
	
	.bot-half {
		width: 100%;
		height: auto;
		border-top: 10px solid #f8f8f8;
		box-sizing: border-box;
		padding: 0 10px;
		.time-box {
			width: 100%;
			height: 60px;
			margin-top: 5px;
			background: #FFFFFF;
			box-shadow: 0 2px 15px 0 rgba(208, 208, 208, 0.50);
			border-radius: 10px;
			display: flex;
			.tiem-val {
				flex: 3;
				position: relative;
				line-height: 60px;
				text-align: center;
				font-size: 14px;
				color: #333;
				font-weight: 700;
			}
			.tiem-val::after {
				position: absolute;
				content: '';
				width: 1px;
				height: 40px;
				top: 50%;
				margin-top: -20px;
				background: #eee;
				right: 0;
			}
			.ampm {
				flex: 2;
				position: relative;
				line-height: 60px;
				text-align: center;
				font-size: 14px;
				.down-img {
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
				.nowdate {
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
					color: #58A1FF;
					text-align: right;
				}
			}
		}
	}
	
	.submit-btn {
		background: #58a1ff;
		color: #fff;
		width: 300px;
		margin-top: 50px;
		border-radius: 100px;
		&.active {
			opacity: 0.8;
		}
	}
</style>