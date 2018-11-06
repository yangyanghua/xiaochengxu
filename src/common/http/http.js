
var httpService = "";
const development = true;
const production = false;
const test = false;
if(development) {
	httpService = 'http://119.29.139.174:8080'; //测试
}

const requstGet = function(url, data, header) {
	return requst(httpService + url, 'GET', data, header)
}

const requstPost = function(url, data, header) {
	return requst(httpService + url, 'POST', data, header);
}

//封装Request请求方法

function requst(url, method, data = {}, header = 'application/x-www-form-urlencoded;charset=UTF-8;') {
	wx.showNavigationBarLoading();
    
	return new Promise((resove, reject) => {

		//获取当前路由
//		data.method = method
		wx.request({
			url: url,
			data: data,
			header: {
				'Content-Type': header
			},
			method: method.toUpperCase(), // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			success: function(res) {
				wx.hideNavigationBarLoading();
					if(res.data.code == 200) {
						resove(res.data.data)
					} else {
						let err = {
							code: res.data.code,
							message: res.data.msg
						}
						reject(err)
					}
			},
			fail: function(msg) {
				wx.hideNavigationBarLoading()
				reject(msg)
			}
		})
	})
}
export {
	requstGet,
	requstPost,
	httpService
}