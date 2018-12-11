<template>
	<div class="main-content">

		<div class="header">
			<div class="user-photo">
				<open-data type="userAvatarUrl"></open-data>
			</div>
		</div>

		<div class="input-box account">
			<image src="../../static/img/icon_user2x.png" class="input-icon" />
			<input class="input-text" v-model="form.phone" placeholder="请输入手机号码" type="text" />
		</div>

		<div class="input-box psd" v-if="psdLogin">
			<image src="../../static/img/icon_password2x.png" class="input-icon" />
			<input class="input-text" type="password" v-model="form.password" placeholder="请输入密码" />
			<span class="txt-btn">忘记密码</span>
		</div>

		<div class="input-box psd" v-if="!psdLogin">
			<image src="../../static/img/icon_verification_code2x.png" class="input-icon" />
			<input class="input-text" type="number" v-model="form.code" placeholder="请输入验证码" />
			<span class="txt-btn" v-if="!isSending" @tap="getCode">获取验证码</span>
			<span class="txt-btn loading" v-if="isSending">重新获取（{{tiem}}）</span>
		</div>

		<button class="submit-btn" v-if="!loading" hover-class="active" @tap="submitData">登录</button>
		<button class="submit-btn loading" v-if="loading" :loading="loading" hover-class="active">登录中...</button>

		<div class="line-text">
			O&nbsp;R
		</div>
		<div class="btn-box">
			<span class="txt-btn checkCode" v-if="psdLogin" @tap="changeType(false)">短信验证码登录</span>
			<span class="txt-btn checkCode" v-if="!psdLogin" @tap="changeType(true)">密码登录</span>

			<span class="txt-btn reg" @tap="linkTo" >注册</span>
		</div>

	</div>

</template>

<script>
	import { login, loginByCode, sendLoginCode } from './srevice.js';
	export default {
		data() {
			return {
				loading: false,
				tiem: 60,
				psdLogin: true,
				isSending: false,
				form: {
					phone: '',
					password: '',
					code: '',
				}
			}
		},

		methods: {
			linkTo(){
				wx.navigateTo({
						url: '../register/main'
					})				
			},
			submitData() {
				if(!this.form.phone) {
					wx.showToast({
						title: '请输入手机号码',
						icon: 'none',
						duration: 2000
					});
					return false;
				};

				if(this.form.phone.length != 11) {
					wx.showToast({
						title: '请输入正确的手机号码',
						icon: 'none',
						duration: 2000
					});
					return false;
				};

				if(this.psdLogin) {
					if(!this.form.password) {
						wx.showToast({
							title: '请输入密码',
							icon: 'none',
							duration: 2000
						});
						return false;
					};

					this._login(this.form);

				} else {
					if(!this.form.code) {
						wx.showToast({
							title: '请输入验证码',
							icon: 'none',
							duration: 2000
						});
						return false;
					};
					this._loginByCode(this.form);
				}
			},

			_loginByCode(opt) {
				let vm = this;
				this.loading = true;
				loginByCode(opt).then((res) => {
					this.loading = false;
					wx.showToast({
						title: '登陆成功！',
						icon: 'success',
						duration: 2000
					});
						wx.setStorage({
							key: 'isLogin',
							data: true,	
							success: function(res) {
								
							},
							fail:function(){
							}
						})						
					setTimeout(function() {
						wx.switchTab({
							url: '../index/main'
						});
					}, 1500)
				}).catch((res) => {
					this.loading = false;
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					});
				})

			},

			_login(opt) {
				let vm = this;
				this.loading = true;
				login(opt).then((res) => {
					this.loading = false;
					wx.showToast({
						title: '登陆成功！',
						icon: 'success',
						duration: 2000
					});
						wx.setStorage({
							key: 'isLogin',
							data: true,	
							success: function(res) {
								
							},
							fail:function(){
							}
						})						
					setTimeout(function() {
						wx.switchTab({
							url: '../index/main'
						});
					}, 1500)
				}).catch((res) => {
					this.loading = false;
					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					});
				})

			},

			changeType(type) {
				this.psdLogin = type;
			},
			getCode() {
				if(!this.form.phone) {
					wx.showToast({
						title: '请输入手机号码',
						icon: 'none',
						duration: 2000
					});
					return false;
				};

				if(this.form.phone.length != 11) {
					wx.showToast({
						title: '请输入正确的手机号码',
						icon: 'none',
						duration: 2000
					});
					return false;
				};
				this._sendLoginCode(this.form.phone);

			},
			_sendLoginCode(phone) {
				let vm = this;
				sendLoginCode({
					phone: phone
				}).then((res) => {

					vm.isSending = true;
					wx.showToast({
						title: '验证码已发送',
						icon: 'none',
						duration: 2000
					});
					let i = 60;
					let interval = setInterval(function() {
						i--;
						vm.tiem = i;
						if(i <= 0) {
							clearInterval(interval);
							vm.isSending = false;
						}
					}, 1000);

				}).catch((res) => {

					wx.showToast({
						title: res.msg,
						icon: 'none',
						duration: 2000
					});

				})

			}

		},

		onReady() {

		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #f8f9fb;
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
		padding-top: 20px;
	}
	
	.header {
		height: 140px;
		width: 100%;
		box-sizing: border-box;
		.user-photo {
			height: 110px;
			width: 110px;
			margin: auto;
			overflow: hidden;
			border-radius: 50%;
			box-shadow: 0 2px 13px -3px #000;
		}
	}
	
	.input-box {
		position: relative;
		height: 60px;
		line-height: 60px;
		width: 314px;
		margin: auto;
		border-radius: 100px;
		padding: 0 45px;
		box-sizing: border-box;
		margin-bottom: 30px;
		box-shadow: 0 1px 16px -7px #000;
		&.psd {
			padding-right: 100px;
		}
		.input-icon {
			position: absolute;
			height: 22px;
			width: 22px;
			left: 15px;
			top: 50%;
			margin-top: -11px;
		}
		.input-text {
			width: 100%;
			height: 60px;
			line-height: 60px;
			border: none;
			font-size: 14px;
			outline: none;
		}
		.txt-btn {
			position: absolute;
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			color: #58a1ff;
			top: 50%;
			margin-top: -15px;
			right: 20px;
		}
	}
	
	.submit-btn {
		background: #58a1ff;
		color: #fff;
		width: 314px;
		height: 60px;
		box-shadow: 0 1px 16px -7px #58a1ff;
		line-height: 60px;
		font-weight: 700;
		box-sizing: border-box;
		border-radius: 100px;
		&.active {
			opacity: 0.8;
		}
		&.loading {
			opacity: 0.4;
		}
	}
	
	.line-text {
		position: relative;
		margin-top: 10px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		width: 100%;
		font-size: 16px;
		color: #999;
		font-weight: 700;
		&::after {
			position: absolute;
			content: '';
			height: 1px;
			background: #999;
			width: 122px;
			top: 50%;
			left: 35px;
		}
		&::before {
			position: absolute;
			content: '';
			height: 1px;
			background: #999;
			width: 122px;
			top: 50%;
			right: 35px;
		}
	}
	
	.btn-box {
		height: 30px;
		line-height: 30px;
		width: 314px;
		margin: auto;
		.txt-btn {
			font-size: 14px;
			color: #58a1ff;
			font-size: 14px;
			text-decoration: underline;
			&.checkCode {
				float: left;
			}
			&.reg {
				float: right;
			}
			&.loading {
				opacity: 0.5;
			}
		}
	}
</style>