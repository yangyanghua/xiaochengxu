<template>
	<div class="main-content">

　　<div class="container">

　　	<canvas canvas-id="clock"/>

　　</div>

	</div>

</template>

<script>
import {temperature} from './srevice.js'	
import {gradientColor} from '@/utils/index.js'

	export default {
		data() {
			return {
				t:0,
			    width: 340,
			    height: 340,
			    tInfo:''
			}
		},

		methods: {
			_temperature(id){
				var that = this;
				temperature({id:id}).then((res)=>{
					this.tInfo = res;
					let t = parseInt((res.code+20)*(60/70));
			    	// 每40ms执行一次drawClock()，人眼看来就是流畅的画面
				    let i = 0,b=-20;
				    let interval = setInterval(function(){
				    	i++;
				    	b++;					    	
				    	if(i > t){
				    		b = res.code; 
				    		that.drawClock(i-1,String(b),res.name);
				    		clearInterval(interval);	    		
				    	}else{
				    		that.drawClock(i,String(b),res.name);
				    	}
				    	
				    }, 40);													
					
				}).catch((res)=>{
					
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					})					
				})
				
			},
			
			
			  drawClock (index,val,name) {
			    const ctx = wx.createCanvasContext('clock');
			    var height = this.height;
			    var width = this.width;
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
			    	
			      var gradient = new gradientColor('#5ccaff','#e7e78f',61);

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
			    
			    function drawTxt() {
			    	ctx.beginPath();
					ctx.setFillStyle('#FC9F44');
					ctx.setFontSize(R/2);
					ctx.fillText(val, -R/2*(val.length/3), 0);
					ctx.setFontSize(R/4);
					
					ctx.fillText('℃', R/2*(val.length/4), 0);		
				    ctx.setFillStyle('#519FFF');
					ctx.setFontSize(R/8);
					
					ctx.fillText(name, -R/8, R/3);
				    ctx.setFillStyle('#333333');
					ctx.setFontSize(R/8);
					ctx.fillText('理想保养温度：20℃-25℃', -R*3/4, R*3/2);

				    ctx.setFillStyle('#333333');
					ctx.setFontSize(R/8);
					ctx.fillText('15℃', -R/8, -R*4/3);

				    ctx.setFillStyle('#333333');
					ctx.setFontSize(R/8);
					ctx.fillText('-20℃', -R*4/3, R/4);

				    ctx.setFillStyle('#333333');
					ctx.setFontSize(R/8);
					ctx.fillText('50℃', R, R/4);

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
			       drawTxt();
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
			        that.width = res.windowWidth
			        // console.log(that.width)   375
			        that.height = res.windowHeight
			        that.drawClock(-1,'0','偏低');
			        // console.log(that.height)  625
			        // 这里的单位是PX，实际的手机屏幕有一个Dpr，这里选择iphone，默认Dpr是2
			      }
			    })
			  },
		onShow() {
			let vm = this;
				wx.getStorage({
					key: 'pid',
					success: function(res) {
						let pid = res.data;
						vm._temperature(pid);
					},
					fail:function(){
						
					}
				})			
			
		},			
		onReady () {
			
			    
		

			    
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
 position: relative;	
  height: 100%;
  width: 100%;
  z-index: 100;
}

</style>