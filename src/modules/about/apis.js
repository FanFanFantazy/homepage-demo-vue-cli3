import { request } from '@/utils/request'

export function postTest (data, type) { return request('/api/about/testapi', data, type) }
export function deadstock (data, type) { return request('/api/shoeOne/deadstock', data, type) }
