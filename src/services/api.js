import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Taro from '@tarojs/taro'

const taroRequestBaseQuery = ({ baseUrl, prepareHeaders }) =>  (args, { getState, ...extraOptions }) => {  
  const { url, method, body, headers={}, params={}, ...rest } = args;  

  const prepareParams = (params) => {
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  };

  const fullUrl = baseUrl + url + (params ? '?' + prepareParams(params) : '');

  return Taro.request({
    url: fullUrl,
    method,
    data: body,
    header: typeof prepareHeaders === 'function' ? prepareHeaders(headers, { getState, ...extraOptions }) : headers,
    ...rest,
  })
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: taroRequestBaseQuery({
    baseUrl: process.env.TARO_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token
      if (token) headers.authorization = token      
      return headers
    },
  }),
  tagTypes: ['User', 'Review', 'Details', 'Order', 'Product', 'Category', 'Slider', 'Banner'],
  endpoints: builder => ({}),
})

export default apiSlice
