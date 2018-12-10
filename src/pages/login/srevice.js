import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';



export const login = (params = {}) => {
	return requstGet(api.login, params);
}

export const loginByCode = (params = {}) => {
	return requstGet(api.loginByCode, params);
}




export const sendLoginCode = (params = {}) => {
	return requstGet(api.sendLoginCode, params);
}


