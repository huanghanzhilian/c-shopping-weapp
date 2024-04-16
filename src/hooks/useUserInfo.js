import { router } from 'expo-router'
import { useGetUserInfoQuery } from '@/services'
import { userLogout } from '@/store'
import { useAppDispatch } from './useRedux'
import useVerify from './useVerify'

export default function useUserInfo() {
  const dispatch = useAppDispatch()
  const isVerify = useVerify()

  const { data, isLoading, error, isError } = useGetUserInfoQuery(undefined, {
    skip: !isVerify,
  })

  const isLoginVerify = !isVerify ? false : isLoading ? false : !!data?.data

  const mustAuthAction = nextAction => {
    if (!isLoginVerify) {
      return router.push('/login')
    }
    nextAction()
  }

  if (isError) dispatch(userLogout())

  return {
    userInfo: data?.data,
    isVerify,
    isLoginVerify,
    mustAuthAction,
    isLoading,
    error,
    isError,
  }
}
