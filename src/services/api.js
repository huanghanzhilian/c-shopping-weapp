import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Taro from '@tarojs/taro'

const taroRequestBaseQuery = ({ baseUrl, ...options }) =>  ({ url, method = 'GET', body, ...args }) => {
  console.log('...args', {...args})
  console.log('...options', {...options})
  
  return Taro.request({
    url: baseUrl + url,
    method: method, // Taro.request 方法中的 method 参数需要大写
    ...options,
    data: body,
    ...args
  })
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: taroRequestBaseQuery({
    baseUrl: process.env.TARO_APP_BASE_URL,
    // 在这里可以添加其他配置，如 header 等
  }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: '/',//process.env.TARO_APP_BASE_URL,
  //   // prepareHeaders: (headers, { getState }) => {
  //   //   const token = getState().user.token
  //   //   if (token) headers.set('authorization', token)
  //   //   return headers
  //   // },
  //   // fetchFn: (...args) => {
  //   //   console.log('fetchFn', {...args})
  //   //   return Taro.request(...args)
  //   // }
  //   // fetchFn: (optional) => {
  //   //   console.log('fetchFn', optional)
  //   //   return Taro.request(optional)
  //   // }
  //   // fetchFn: ky
  // }),
  tagTypes: ['User', 'Review', 'Details', 'Order', 'Product', 'Category', 'Slider', 'Banner'],
  endpoints: builder => ({}),
})

export default apiSlice
