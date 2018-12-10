import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const pianoRegister = (params = {}) => {
	return requstPost(api.pianoRegister, JSON.stringify(params),'application/json;charset=UTF-8;');
}



