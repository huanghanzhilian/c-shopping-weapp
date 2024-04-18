import { Text, View } from '@tarojs/components'

import { useAppDispatch } from '@/hooks'
import { userLogout } from '@/store'
import IconFont from '@/assets/iconfont'
import Taro from '@tarojs/taro'

export default function Logout() {
  //? Assets
  const dispatch = useAppDispatch()

  //? Handlers
  const handleLogout = () => {
    dispatch(userLogout())
    Taro.showToast({
      title: '已退出登录',
      icon: 'success',
      duration: 2000,
    })
  }

  //? Render(s)
  return (
    <View
      className="flex flex-row justify-between items-center transition-colors py-4 text-xs text-gray-700 w-full"
      onClick={handleLogout}
    >
      <Text className="text-gray-700">退出</Text>
      <IconFont name="icon-logout" size={30} />
    </View>
  )
}
