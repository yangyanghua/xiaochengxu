<template>
	<div class="main-content">
		<div class="header">
			<div class="heItem seach">
				<div class="btn seachBtn">
					<input class="seachInput" placeholder="搜索" />
					<image class="search" src="../../static/img/icon_search2x.png" /> 
					<image class="clearInput" src="../../static/img/icon_delete22x.png" /> 
				</div>
			</div>
			<span class="right-btn" >取消</span>
		</div>
		<div class="content-box">
			
			<h2 class="title">热门搜索</h2>
			<div class="btn-box">
				
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
			</div>
			<h2 class="title">历史搜索</h2>
			<div class="btn-box">
				
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
				<button class="word-btn" size="mini"  >珠江牌</button>
			</div>		
			<h2 class="title">搜索结果</h2>
			<div class="search-results">				
					<ul class="results-content">
						<li class="results-item">
							<span class="brand-name">品牌</span>
							<span class="brand-name">生产商</span>
						</li>
					</ul>
					
			</div>				
		</div>
		
		
		
		
		

	</div>

	
	
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  methods: {



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
  }
}
</script>

<style lang="scss" scoped>
	
	.main-content {
		padding-top: 35px;
		height: 100%;
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
			width: 86%;
			height: 30px;
			border-radius: 100px;
			background: #EEEEEE;
			float: left;
			.seachBtn {
				position: relative;
				height: 30px;
				line-height: 30px;
				padding-left: 30px;
				font-size: 14px;
				.seachInput{
					display: inline-block;
					height: 30px;
					width: 80%;
					line-height: 30px;
					font-size: 12px;
				}
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
		.clearInput{
			position: absolute;
			height: 16px;
			width: 16px;
			top: 50%;
			margin-top: -8px;
			right: 10px;
		}
		.right-btn{
			position: absolute;
			top: 1px;
			right: 5px;
			display: block;
			height: 30px;
			line-height: 30px;
			padding: 0 10px;
			font-size: 14px;
			color: #333;
		}
	}
	
	.content-box{
		margin-top: 5px;
		border-top:1px solid #aaa ;
		padding:0 10px;
		.title{
			height: 40px;
			line-height: 40px;
			font-size: 15px;
			color: #333;
			font-weight: 700;
		}
		.word-btn{
			margin-right: 3px;
			border-right:1px solid #EEEEEE !important ;
		}
	}

	.search-results{
		width: 100%;
		box-sizing: border-box;
		padding-right: 40px;
		.results-content{
			width: 100%;
			height: auto;
			border: 1px solid #eee;
			box-sizing: border-box;
			.results-item{
				height: 30px;
				line-height: 30px;
				display: flex;
				box-sizing: border-box;
				border-bottom: 1px solid #eee;
				.brand-name{
					flex: 1;
					line-height: 30px;
					text-align: center;
					box-sizing: border-box;
					border-right:1px solid #eee;
				}
				.ent-name{
					flex: 1;
					line-height: 30px;
					text-align: center;
					box-sizing: border-box;				
				}
			}
			.results-item:last-child{
				border: none;
			}
		}
	}
	





</style>
