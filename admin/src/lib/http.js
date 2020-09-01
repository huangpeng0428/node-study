/*
 * @Date: 2020-08-27 16:16:58
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-09-01 11:16:42
 */
import axios from 'axios'
import Vue from 'vue'
import router from '../router'

const http = axios.create({

  // baseURL: process.env.VUE_APP_API_URL || '/admin/api',

  baseURL: 'http://localhost:3002/admin/api',
})

http.interceptors.request.use(
  (config) => {

    // Do something before request is sent
    if (localStorage.token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${localStorage.token}`
    }
    console.log(config)
    return config
  },
  (error) =>

    // Do something with request error
     // eslint-disable-next-line implicit-arrow-linebreak
     Promise.reject(error)
  ,
)
http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message,
      })

      if (err.response.status === 401) {
        router.push('/login')
      }
    }

    return Promise.reject(err)
  },
)

export default http
