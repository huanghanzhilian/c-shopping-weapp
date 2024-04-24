import SigninPromoRenderer from '../renderer/SigninPromoRenderer'

import { useUserInfo } from '@/hooks'

export default function AuthWrapper({ children, tips }) {
  const { userInfo, isVerify, isLoading } = useUserInfo()

  return (
    <>
      {isLoading ? null : !isVerify || !userInfo ? (
        <SigninPromoRenderer tips={tips} />
      ) : (
        <>{children}</>
      )}
    </>
  )
}
