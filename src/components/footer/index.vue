<template>
	<section>
		<div class="footer">
			<ul class="navLsit">
				<li class="navItem">
					<div class="imgbox">
						<image  class="imgs" mode="scaleToFill" src="../../static/img/icon_home_press2x.png"/>
					</div>
				</li>
				<li class="navItem">
					<div class="imgbox">
						<image  class="imgs" mode="scaleToFill" src="../../static/img/icon_friend2x.png"/>
					</div>
				</li>
				<li class="navItem crm">
						<div class="imgbox canmera">
							<image  class="imgs" mode="scaleToFill" src="../../static/img/icon_canmera2x.png"/>
						</div>						
				</li>
				<li class="navItem">
				<div class="imgbox">
					<image  class="imgs" mode="scaleToFill" src="../../static/img/icon_talk2x.png"/>
					
				</div>
				</li>
				<li class="navItem">
				<div class="imgbox">
					<image  class="imgs" mode="scaleToFill" src="../../static/img/icon_personal2x.png"/>
				</div>
				</li>
			</ul>
			
		</div>		
	</section>
</template>

<script>
//	import { } from './server.js'
	export default {
		data(){
			return {
				
				
			}
		},
		computed: {},
		filters: {},
		watch: {},
		methods: {},
		mounted(){}

	}
</script>


<style  scoped>

	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 40px;
		background: #fff;
		border-top:1px solid #EEEEEE ;
		
	}
	
	.navLsit{
		width: 100%;
		height: 40px;
		display: flex;
	}
	
	.navLsit .navItem{
		position: relative;
		flex: 1;
		text-align: center;
	}
	
	.navLsit .navItem .imgbox{
		height: 40px;
		width: 60px;
		margin: auto;
		text-align: center;
	}
	.navLsit .navItem .imgbox.canmera{
		position:absolute;
		top: -20px;
		height: 60px;
		width: 60px;
		box-sizing: border-box;
		padding-top: 5px;
		border-top: 1px solid #EEEEEE;
		border-radius:50%;
		background: #fff;
		
	}
	.navLsit .navItem .canmera .imgs{
		box-shadow: 0 4px 20px -5px #ff5b40;
		border-radius:50%;
	}
	
	.navLsit .navItem .imgbox .imgs{
		width: 40px;
		height: 40px;
	}
	
</style>