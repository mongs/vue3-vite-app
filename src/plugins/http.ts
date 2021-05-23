import type { App } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 2000,
})

// 请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  // 处理token等
  return config;
}, error => Promise.reject(error));

// 响应拦截
service.interceptors.response.use((response: AxiosResponse) => {
  // 响应拦截
  return response;
}, error => {

  return Promise.reject(error)
});

export default function setupHttp(app: App<Element>) {
  app.config.globalProperties.$http = service;
}
