import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 1000,
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (err: any) => Promise.reject(err),
)

request.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data
  },
  (err: any) => Promise.reject(err),
)

export default request
