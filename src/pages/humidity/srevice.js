import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';


export const humidity = (params = {}) => {
	return requstGet(api.humidity, params);
}

