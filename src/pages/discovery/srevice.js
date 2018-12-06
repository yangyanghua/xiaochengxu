import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const authenticity = (params = {}) => {
	return requstGet(api.authenticity, params);
}

