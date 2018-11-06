import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const queryByBrand = (params = {}) => {
	return requstPost(api.queryByBrand, JSON.stringify(params));
}

export const queryBySn = (params = {}) => {
	return requstPost(api.queryBySn, JSON.stringify(params));
}