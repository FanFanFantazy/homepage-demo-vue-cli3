import { post, get, patch, put } from '@/utils/server'

export function request (url, data, type) {
  if (type === 'get') {
    return get(url, data)
  } else if (type === 'post') {
    return post(url, data)
  } else if (type === 'patch') {
    return patch(url, data)
  } else if (type === 'put') {
    return put(url, data)
  }
}
