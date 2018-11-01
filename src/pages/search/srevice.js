import { http, api } from '@/common/http/index.js';
import qs from 'qs';

//删除
export const getDetail = (params = {}) => {
	return http.get(api.getDetail, {params});
}
//查询