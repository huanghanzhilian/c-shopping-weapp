import apiSlice from './api'

export const commonApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUploadToken: builder.query({
      query: () => ({
        url: `/api/upload/getToken`,
        method: 'GET',
      }),
    }),
    getFeedInfo: builder.query({
      query: (params) => ({
        url: `/api/feed`,
        method: 'GET',
        params
      }),
    }),
  }),
})

export const { useGetFeedInfoQuery, useGetUploadTokenQuery, useLazyGetUploadTokenQuery } =
  commonApiSlice
