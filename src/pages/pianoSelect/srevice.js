import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const myPianoList = (params = {}) => {
	return requstGet(api.myPianoList, params);
}




