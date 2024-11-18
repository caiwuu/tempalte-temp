/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import logger from './logger'
import router from '@/router'
// import router from '../router'
axios.defaults.baseURL = '/'
// 请求超时时间
axios.defaults.timeout = 2 * 60 * 1000 //2分钟

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.cancelToken = new cancelToken((c) => {
      addPending(config, c)
    })
    console.log(config)

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 403 || response.data.code === 403) {
      router.push('/login')
      return Promise.reject(response)
    }
    if (response.status === 200) return Promise.resolve(response)

    return Promise.reject(response)
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error === 'Error: Network Error') {
      alert('网络错误，请检查网络连接')
    } else if (error.response && error.response.status) {
      ElMessage({
        message: `接口请求错误(${error.response.status})`,
        grouping: true,
        type: 'success',
      })
      logger.error('请求错误信息', {
        url: error.response.config.url,
        method: error.response.config.method,
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
      })
    }
    return Promise.reject(error.response)
  },
)
let pending: any[] = []
let cancels: any[] = []
const cancelToken = axios.CancelToken // 初始化取消请求的构造函数
const addPending = (config: any, fn?: any) => {
  if (pending.includes(config.url)) {
    const index = pending.indexOf(config.url)
    cancels.splice(index, 1, fn)
  } else {
    if (fn) {
      pending.push(config.url)
      cancels.push(fn)
    }
  }
}
/**
 * @param url 请求地址
 * @param cancelMsg  取消提示信息
 */
export function cancelApi(url: string, cancelMsg?: string) {
  if (pending.includes(url)) {
    const index = pending.indexOf(url)
    pending.splice(index, 1)
    const cancel = cancels.splice(index, 1)[0]
    cancelMsg ? cancel(cancelMsg) : cancel()
  }
}
// 取消所有请求
export function cancelAllApi() {
  pending = []
  cancels.forEach((cancel) => cancel())
  cancels = []
}
// 请求类型
export enum Method {
  get = 'get',
  GET = 'GET',
  delete = 'delete',
  DELETE = 'DELETE',
  head = 'head',
  HEAD = 'HEAD',
  options = 'options',
  OPTIONS = 'OPTIONS',
  post = 'post',
  POST = 'POST',
  put = 'put',
  PUT = 'PUT',
  patch = 'patch', //更新
  PATCH = 'PATCH', //更新
  purge = 'purge',
  PURGE = 'PURGE',
  link = 'link',
  LINK = 'LINK',
  unlink = 'unlink',
  UNLINK = 'UNLINK',
}
export function request<T>(
  url: string,
  method: Method,
  config: AxiosRequestConfig & any,
): Promise<T> {
  // 设置 URL 和方法
  config.url = url
  config.method = method

  // 确保 URL 以单斜杠开头，并移除多余的双斜杠
  if (config.url?.indexOf('/') !== 0) {
    config.url = '/' + config.url
  }
  config.url = config.url.replace(/\/\//gi, '/')

  // 返回带有泛型支持的 Promise
  return new Promise<T>((resolve, reject) => {
    axios(config)
      .then((res) => resolve(res.data as T)) // 明确类型转换
      .catch((e) => reject(e))
      .finally(() => {
        cancelApi(config.url) // 执行取消逻辑
      })
  })
}

export function get<T>(url: string, params: any = {}): Promise<T> {
  return request<T>(url, Method.GET, { params })
}
export function post<T>(url: string, data: any = {}): Promise<T> {
  return request<T>(url, Method.POST, { data })
}
export function put<T>(url: string, data: any = {}): Promise<T> {
  return request<T>(url, Method.PUT, { data })
}
export function del<T>(url: string, data: any = {}): Promise<T> {
  return request<T>(url, Method.DELETE, { data })
}
export function patch<T>(url: string, data: any = {}): Promise<T> {
  return request<T>(url, Method.PATCH, { data })
}
// 导出
export default { get, post, put, del, patch, cancelApi, cancelAllApi, request }
