import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';




export const temperature = (params = {}) => {
	return requstGet(api.temperature, params);
}

