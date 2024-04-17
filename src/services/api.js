import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Taro from '@tarojs/taro'

const prepareParams = params => {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')
}

const taroRequestBaseQuery =
  ({ baseUrl, prepareHeaders }) =>
  async (args, { getState, ...extraOptions }) => {
    const { url, method, body, headers = {}, params, ...rest } = args

    const fullUrl = baseUrl + url + (params ? '?' + prepareParams(params) : '')

    const response = await Taro.request({
      url: fullUrl,
      method,
      data: body,
      header:
        typeof prepareHeaders === 'function'
          ? prepareHeaders(headers, { getState, ...extraOptions })
          : headers,
      ...rest,
    })

    if (response.statusCode >= 400) {
      return {
        error: {
          status: response.statusCode,
          data: response.data,
        },
      }
    }

    return { data: response.data }
  }

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
