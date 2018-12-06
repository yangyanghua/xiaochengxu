import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const getIndexArticle = (params = {}) => {
	return requstGet(api.getIndexArticle, JSON.stringify(params));
}

export const getIndexCarousel = (params = {}) => {
	return requstGet(api.getIndexCarousel, JSON.stringify(params));
}
export const getIndexRecommend = (params = {}) => {
	return requstGet(api.getIndexRecommend, JSON.stringify(params));
}


