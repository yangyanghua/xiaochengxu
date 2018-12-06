<template>
	<div class="main-content">

　　<div class="container">

　　	<canvas canvas-id="clock"/>
	<div class="humidty">
		<p class="num">24<span class="iocn" >℃</span></p>
		<p class="status">偏低</p>
		<p class="start">-20℃</p>
		<p class="min">35℃</p>
		<p class="end">50℃</p>
		
		<p class="ps-txt">理想保养温度：20℃-25℃</p>
		
	</div>
	
　　</div>

	</div>

</template>

<script>
import {queryByBrand,queryBySn} from './srevice.js'	
import {gradientColor} from '@/utils/index.js'

	export default {
		data() {
			return {
			    width: 340,
			    height: 340
			}
		},

		methods: {
			  drawClock (index) {
			    const ctx = wx.createCanvasContext('clock');
			    var height = this.height;
			    var width = this.width;
			    console.log(height,width);
			    // 设置文字对应的半径
			    var R = width / 2 - 60;
			    // 把原点的位置移动到屏幕中间，及宽的一半，高的一半
			    ctx.translate(width / 2, height / 2-60);
			
			    // 画外框
			    function drawBackground() {
			      // 设置线条的粗细，单位px
			      ctx.setLineWidth(8);
			      // 开始路径
			      ctx.beginPath();
			      // 运动一个圆的路径
			      // arc(x,y,半径,起始位置，结束位置，false为顺时针运动)
			      ctx.arc(0, 0, width / 2, 0, 2 * Math.PI, false);
			      ctx.closePath();
			      // 描出点的路径
			      ctx.stroke();
			    };

			    // 画数字对应的点
			    function drawdots() {
			    	
			      var gradient = new gradientColor('#5ccaff','#e7e78f',64);

			     for (let i = 0; i <= 60; i++) {
					      ctx.save();
					      ctx.beginPath();
					      // 确定偏移
					      var rad = 2 * Math.PI / 120 * i;
					      ctx.rotate(rad);
					      ctx.setLineWidth(2);
					      ctx.setStrokeStyle(gradient[i]);
					      if(i<=index){
					      	ctx.setStrokeStyle(gradient[i]);	
					      }else{
					      	ctx.setStrokeStyle('#eeeeee');
				      		}
					      
					      ctx.moveTo(0, 10);
					      // 一开始的位置指向12点的方向，长度为3 * R / 4
					      if(i==index){
					      	ctx.lineTo((-3 * R / 2)+30,0);	
					      }else{
					      	ctx.lineTo((-3 * R / 2)+35,0);
					      }
					      ctx.stroke();
					      ctx.closePath();
					      ctx.restore();					    	
			      }
			      
			      ctx.closePath();
			    }

			    //画出中间白色的大圆
			    function drawDot() {
			      ctx.beginPath();
			      ctx.arc(0, 0, (3 * R / 2)-50, 0, 2 * Math.PI, false);
			      ctx.setFillStyle('#ffffff');
			      ctx.fill();
			      ctx.closePath();
			    }
			    //画出中间那个灰色的圆
			    function drawDot1() {
			      ctx.beginPath();
			      ctx.arc(0, 0, (3 * R / 2)-80, 0, 2 * Math.PI, false);
			      const grd = ctx.createLinearGradient(0, 140, 0, -140)
				  grd.addColorStop(0, '#f8f8f8')
				  grd.addColorStop(1, '#fff')
				  ctx.setFillStyle(grd)
				  ctx.setShadow(0, 5, 15, '#bbb')
			      ctx.fill();
			      ctx.closePath();
			    }
			    //画出中间白色的小圆
			    function drawDot2() {
			      ctx.beginPath();
			      ctx.arc(0, 0, (3 * R / 2)-90, 0, 2 * Math.PI, false);
				  ctx.setFillStyle('#ffffff');				  
				  ctx.setShadow(0, 0, 0, '#fff')
			      ctx.fill();
			      ctx.closePath();
			    }

			    function Clock() {
			      // 依次执行各个方法
			      drawdots();
			      drawDot();
			      drawDot1();
			      drawDot2();
			      // 微信小程序要多个draw才会画出来，所以在最后画出
			      ctx.draw();
			    }
			    // 执行Clock这个方法，实际上执行了所有步骤
			    Clock();
			  }
		},
		onLoad: function (options) {
			    var that = this
			    //获取系统信息  
			    
			    wx.getSystemInfo({
			      //获取系统信息成功，将系统窗口的宽高赋给页面的宽高  
			      success: function (res) {
			      	console.log(res);
			        that.width = res.windowWidth
			        // console.log(that.width)   375
			        that.height = res.windowHeight
			        
			        // console.log(that.height)  625
			        // 这里的单位是PX，实际的手机屏幕有一个Dpr，这里选择iphone，默认Dpr是2
			      }
			    })
			  },
			
		onReady () {
			
			    var that = this
			    //获取系统信息  
			    
			    wx.getSystemInfo({
			      //获取系统信息成功，将系统窗口的宽高赋给页面的宽高  
			      success: function (res) {
			      	console.log(res);
			        that.width = res.windowWidth
			        // console.log(that.width)   375
			        that.height = res.windowHeight
			        that.drawClock(-1);
			        // console.log(that.height)  625
			        // 这里的单位是PX，实际的手机屏幕有一个Dpr，这里选择iphone，默认Dpr是2
			      }
			    })			
			
			   
			    // 每40ms执行一次drawClock()，人眼看来就是流畅的画面
			    let i = 0;
			    let interval = setInterval(function(){
			    	i++
			    	if(i==50){
			    		clearInterval(interval);
			    	}else{
			    		that.drawClock(i);
			    	}
			    	
			    }, 40);
			    
			  },
			
			
			  // 所有的canvas属性以及Math.sin,Math.cos()等涉及角度的参数都是用弧度表示
			  // 时钟

	}
</script>

<style lang="scss" scoped>

.container {
  position: relative;	
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: auto;
}

canvas {
  height: 100%;
  width: 100%;
}

.humidty{
	position: absolute;
	height: 300px;
	width: 100%;
	top: 66px;
	left: 0;
	box-sizing: border-box;
	padding-top: 100px;
	background: none;
	z-index: 100;
	.num{
		width: 100%;
		text-align: center;
		font-size: 88px;
		color: #FC9F44;
		.iocn{
			font-size: 32px;
		}
	}
	.status{
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #1E90FF;
	}
	.ps-txt{
		margin-top: 35%;
		font-size: 16px;
		color: #333;
		text-align: center;		
	}
	
	.start{
		position: absolute;
		font-size: 18px;
		color: #333;
		top: 63%;
		left: 10px;
		
	}
	.min{
		position: absolute;
		font-size: 18px;
		color: #333;
		left: 50%;
		margin-left: -18px;
		top: -5%;		
	}
	.end{
		position: absolute;
		font-size: 18px;
		color: #333;
		top: 63%;
		right: 10px;			
	}
}

</style>