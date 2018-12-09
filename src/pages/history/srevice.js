import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const getServerList = (params = {}) => {
	return requstGet(api.getServerList, params);
}
