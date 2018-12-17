<template>
	<div class="main-content">
		<div class="header">
			<div class="heItem seach">
				<div class="btn seachBtn" @click="linkToBar" > 
					<image class="search" src="../../static/img/icon_search2x.png" /> 搜索
				</div>
			</div>
		</div>

		<div class="wiper-banner">

			<swiper :indicator-dots="indicatorDots" class="swiperContent" :autoplay="autoplay" :interval="interval" indicator-dots="true" previous-margin="15px" next-margin="15px" :duration="duration">
				<block v-for="(item,index) in banner" :key="index">
					<swiper-item class="image-box">
						<image :src="item.imageUrl" class="slide-image" />
					</swiper-item>
				</block>
			</swiper>

		</div>

		<div class="nav">
			<ul class="nav-list">
				<li class="navitem" @tap="linkTo('discovery')" >
					<img class="nav-image" src="../../static/img/icon_query2x.png" />
					<p class="nav-txt">真伪查询</p>
				</li>
				<li class="navitem" @tap="linkTo('steward')" >
					<img class="nav-image" src="../../static/img/icon_register2x.png" />
					<p class="nav-txt">钢琴管家</p>
				</li>
				<li class="navitem" @tap="linkTo('serRequest')" >
					<img class="nav-image" src="../../static/img/icon_service2x.png" />
					<p class="nav-txt">我要服务</p>
				</li>
				<li class="navitem" @tap="linkTo('pianoRegister')" >
					<img class="nav-image" src="../../static/img/register2x.png" />
					<p class="nav-txt">保用登记</p>
				</li>

			</ul>

		</div>

		<div class="recommend">
			<div class="title">
				<p class="title-txt">每日推荐</p>
			</div>

			<div class="product" v-for="(item,index) in recommend" :key="index" >
				<div class="image-box">
					<img class="pro-image" :src="item.imageUrl" />
				</div>
				<div class="pro-info">
					<p class="name"><span class="brand">{{item.brandEN}}-{{item.brandCN}}</span>-{{item.model}} &nbsp;&nbsp;{{item.series+'系列'}}全新{{item.desc}}</p>
					<p class="sku-list">
						<span class="sku-item">{{item.spec}}</span><span class="sku-item">{{item.color}}</span>
					</p>
					<p class="price">RMB&nbsp;{{item.priceCN}}</p>
				</div>
			</div>
			
			
			
		</div>

		<div class="line"></div>

		<div class="news">

			<div class="title">
				<p class="title-txt">资讯专区</p>
				<span class="left-btn more">更多＞</span>
			</div>

			<ul class="news-list">
				<li class="new-item" v-for="(item,index) in article" :key="index" >{{item.articleTitle}}</li>
			</ul>

		</div>

	</div>

</template>

<script>

	import { getIndexArticle,getIndexCarousel,getIndexRecommend } from './srevice.js';
	export default {
		data() {
			return {
				banner:[],
				isLogin:false,
				recommend:[],
				article:[],
				indicatorDots: false,
				autoplay: 2000,
				interval: 5000,
				duration: 1000,
				userInfo: {}
			}
		},

		methods: {
			linkToBar(){
						wx.switchTab({
							url: '../search/main'
						});				
			},
			linkTo(path){
				if(this.isLogin){
					wx.navigateTo({
							url: '../'+path+'/main'
						})					
				}else{
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
				}
				

				
			},
			_getIndexCarousel(){
				
				getIndexCarousel().then((res)=>{
					this.banner = res;
					
				}).catch((res)=>{
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})						
				})
				
			},
			_getIndexRecommend(){
				
				getIndexRecommend().then((res)=>{
					this.recommend = res;
				}).catch((res)=>{
					
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})					
				})
				
			},
			_getIndexArticle(){
				
				getIndexArticle().then((res)=>{
					
					this.article = res;
					
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
			
			this._getIndexCarousel();
			this._getIndexRecommend();
			this._getIndexArticle();
		},

	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #fff;
		height: 100%;
		padding-top: 36px;
	}
	
	.header {
		position: fixed;
		top: 0;
		left: 0;
		padding: 0 10px;
		height: 35px;
		box-sizing: border-box;
		width: 100%;
		background: #fff;
		z-index: 100;
		.heItem {
			width: 96%;
			height: 30px;
			border-radius: 100px;
			background: #EEEEEE;
			margin: auto;
			.seachBtn {
				position: relative;
				height: 30px;
				line-height: 30px;
				padding-left: 30px;
				font-size: 14px;
			}
		}
		.search {
			position: absolute;
			top: 50%;
			left: 10px;
			margin-top: -8px;
			height: 16px;
			width: 16px;
		}
	}
	
	.img-list {
		padding: 10px;
		box-sizing: border-box;
		.img-item {
			display: inline-block;
			width: 49%;
			height: auto;
			margin-left: 1%;
			background: #FFFFFF;
		}
		.img-item .img {
			width: 100%;
			.imgInfo {
				padding: 5px;
				background: #fff;
			}
		}
	}
	
	.swiperContent {
		height: 180px;
		background: #fff;
	}
	
	.slide-image {
		width: 100%;
		height: 150px;
		border-radius: 4px;
		box-shadow: 0 3px 9px -3px #000;
	}
	
	.image-box {
		padding: 5px;
		box-sizing: border-box;
	}
	
	.nav-list {
		height: 100px;
		width: 100%;
		box-sizing: border-box;
		padding: 10px 20px;
		display: flex;
		.navitem {
			flex: 1;
			text-align: center;
			.nav-image {
				height: 50px;
				width: 50px;
				border-radius: 50%;
			}
			.nav-txt {
				font-size: 14px;
				color: #333;
				margin-top: 5px;
			}
		}
	}
	
	.title {
		position: relative;
		height: 36px;
		line-height: 36px;
		padding: 0 10px;
		box-sizing: border-box;
		.title-txt {
			font-size: 14px;
			font-weight: bold;
			color: #333;
			padding-left: 10px;
		}
		.left-btn {
			position: absolute;
			top: 0;
			right: 10px;
			color: #666;
			height: 36px;
			min-width: 36px;
			line-height: 36px;
			font-size: 12px;
		}
	}
	
	.title::after {
		position: absolute;
		top: 50%;
		left: 10px;
		content: '';
		height: 16px;
		margin-top: -8px;
		width: 3px;
		background: dodgerblue;
	}
	
	.product {
		height: 110px;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		margin-bottom: 5px;
		.image-box {
			flex: 1;
			.pro-image {
				height: 100px;
				width: 100px;
			}
		}
		.pro-info {
			flex: 3;
			padding-left: 10px;
			box-sizing: border-box;
			.name {
				margin-bottom: 8px;
				line-height: 20px;
				font-size: 14px;
				color: #333;
				.brand {
					font-weight: bold;
					color: orange;
				}
			}
			.sku-list {
				margin-bottom: 8px;
				font-size: 10px;
				.sku-item {
					padding: 2px 6px;
					background: #EEEEEE;
					color: #999;
					margin-right: 8px;
				}
			}
			.price {
				font-size: 14px;
				color: red;
			}
		}
	}
	
	.line {
		height: 10px;
		width: 100%;
		background: #EEEEEE;
	}
	
	.news-list {
		width: 100%;
		height: auto;
		padding: 0 10px;
		box-sizing: border-box;
		.new-item {
			position: relative;
			height: 26px;
			line-height: 26px;
			font-size: 13px;
			color: #666;
			width: 100%;
			box-sizing: border-box;
			padding-left: 22px;
			text-align: left;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.new-item::after {
			position: absolute;
			top: 50%;
			left: 10px;
			margin-top: -2px;
			content: '';
			height: 4px;
			width: 4px;
			border-radius: 50%;
			background: #666;
		}
	}
</style>