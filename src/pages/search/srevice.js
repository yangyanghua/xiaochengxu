import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';




export const searchHot = (params = {}) => {
	return requstGet(api.searchHot, params);
}

export const search = (params = {}) => {
	return requstGet(api.search, params);
}



