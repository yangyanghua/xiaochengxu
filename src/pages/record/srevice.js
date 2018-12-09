import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

export const getServerInfo = (params = {}) => {
	return requstGet(api.getServerInfo, params);
}
