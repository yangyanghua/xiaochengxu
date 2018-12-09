import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const guessServer = (params = {}) => {
	return requstGet(api.guessServer, params);
}

export const getServerInfo = (params = {}) => {
	return requstGet(api.getServerInfo, params);
}

export const getServerList = (params = {}) => {
	return requstGet(api.getServerList, params);
}


export const submitServer = (params = {}) => {
	return requstPost(api.submitServer,qs.stringify(params));
}


