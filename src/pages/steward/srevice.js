import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const myPianoList = (params = {}) => {
	return requstGet(api.myPianoList, params);
}

export const myPianoInfo = (params = {}) => {
	return requstGet(api.myPianoInfo, params);
}

export const humidity = (params = {}) => {
	return requstGet(api.humidity, params);
}

export const temperature = (params = {}) => {
	return requstGet(api.temperature, params);
}

