import axios from 'axios';
import * as api from './api.js';
let httpService = 'https://pred-api.irenao.cn';

const getToken = () => {
  return JSON.parse(localStorage.getItem('user'));
};
let http = axios.create({
  baseURL: httpService,

});

http.defaults.adapter = function (config) {
    return new Promise((resolve, reject) => {
        console.log(config)
        // TODO wx.request(...)
        
        wx.request({
        	url:config.url,
        	data:config.params,
        	header:config.header,
        	method:config.method,
        	dataType:config.dataType,
        	success:function(response){
        		  resolve(response);
        	},
        	fail:function(response){
				 
				let tipMessage = {
				  code: '-1',
				  message: '网络或系统错误'
				}
				reject(tipMessage);
 
        	}
        	
        } );
        
        
    })
}



axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.timeout =  3000;
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  let params = {};
  config.params = Object.assign(config.params || {}, params); 
  return config;
});




http.interceptors.response.use(function (response) {

 return response;

 // let data = response.data || {};
//let tipMessage = {
//  code: data.code,
//  message: data.message
//}
//return Promise.reject(tipMessage);
}, function (error) {
	console.log(error)
	
  let tipMessage = {
    code: '-1',
    message: '网络或系统错误'
  }

  return Promise.reject(tipMessage);
});
export default http;


// console.log('imHttpService-----',imHttpService)
export {
  api,
  http,
  httpService,
};
