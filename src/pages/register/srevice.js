import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';


export const sendRegisterCode = (params = {}) => {
	return requstGet(api.sendRegisterCode, params);
}


export const register = (params = {}) => {
	return requstGet(api.register, params);
}
