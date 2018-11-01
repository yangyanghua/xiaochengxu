<template>
	<div class="main-content">
		<div class="header">
			<div class="heItem seach">
				<span class="btn seachBtn">
					<image class="imgs" src="../../static/img/icon_search2x.png"/>
				</span>	
			</div>
			<div class="heItem con">
				<span class="btn likeBtn">关注</span>	
			</div>
			<div class="heItem con">
				<span class="btn">发现</span>	
			</div>
			<div class="heItem con">
				<span class="btn">热门</span>	
			</div>
			<div class="heItem map">
				<span class="btn ">地图</span>	
			</div>			
		</div>
		
		<div class="img-content">
			<ul class="img-list">
				<li class="img-item">
					<image class="img" src="../../static/img/01.jpg"/>
					<div class="imgInfo">
						<p class="comment">南方公园：真理之杖</p>
						<div class="userInfo">
							<div class="userImg">
								<span>
									<image class="img" mode="scaleToFill" src="../../static/img/01.jpg"/>
								</span>
							</div>
							<div  class="infodetail">
								<p class="name">卡尔曼•埃里克</p>
								<p class="date">2018-06-15 16:20</p>
							</div>
						</div>
					</div>
				</li>

				<li class="img-item">
					<image class="img"  mode="scaleToFill" src="../../static/img/02.jpg" />
					<div class="imgInfo">
						<p class="comment">南方公园：真理之杖</p>
						<div class="userInfo">
							<div class="userImg">
								<span>
									<image class="img" src="../../static/img/01.jpg"/>
								</span>
							</div>
							<div  class="infodetail">
								<p class="name">卡尔曼•埃里克</p>
								<p class="date">2018-06-15 16:20</p>
							</div>
						</div>
					</div>
				</li>	

				
			</ul>
			<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">获取手机号</button> 
		</div>
		


	</div>

	
	
</template>

<script>
import {getDetail} from './srevice.js';
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getPhoneNumber(e) { 
		console.log(e.detail.errMsg) 
		console.log(e.detail.iv) 
		console.log(e.detail.encryptedData) 
	}, 
    
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    _getDetail(){
		
    	getDetail({id:'64'}).then((res)=>{
    		console.log(res);
    		
    	}).catch((res)=>{
    		console.log(res);
    	})
    },
    
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
  //	this._getDetail();
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
	
	.main-content {
		background: #f1f1f1;
		height: 100%;
	}
	
	.header {
		padding: 0 10px;
		height: 40px;
		display: flex;
		box-sizing: border-box; 
		width: 100%;
		background: #fff;
		.seach {
			flex: 2;
			text-align: left;
		}
		.con {
			flex: 1;
			text-align: center;
		}
		.btn {
			display: block;
			height: 40px;
			line-height: 40px;
			font-size: 13px;
			color: #333;
			.imgs {
				height: 20px;
				width: 20px;
				margin-top: 10px;
			}
		}
		
		 .map{
				flex: 2;
				text-align: right;
			}		
		
	}


	
	
.img-content {
	width: 100%;
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



	.imgInfo .comment{
		font-size: 18px;
		color: #333;
		padding: 0 10px;
	}
	
	.imgInfo .userInfo{
		display: flex;
		height: 50px;
		padding: 10px
	} 
	.imgInfo .userInfo .userImg{
		flex: 0 0 50px;
	}
	
	.imgInfo .userInfo .userImg .img{
		display: block;
		height: 40px;
		width: 40px;
		border-radius:50%;
		margin-top: 5px;
		overflow: hidden;
	}
	
	.imgInfo .userInfo .infodetail{
		flex: 1;
	}
	.imgInfo .userInfo .infodetail .name{
		color: #666;
		font-size: 12px;
		margin-top: 5px;
	}
	.imgInfo .userInfo .infodetail .date{
		font-size: 12px;
		color: #999;
		margin-top: 5px;		
	}
	

</style>
