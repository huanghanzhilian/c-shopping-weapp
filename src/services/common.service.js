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
      query: () => ({
        url: `/api/feed`,
        method: 'GET',
        params: { page_size:1, page:1 },
      }),
    }),
  }),
})

export const { useGetFeedInfoQuery, useGetUploadTokenQuery, useLazyGetUploadTokenQuery } =
  commonApiSlice
