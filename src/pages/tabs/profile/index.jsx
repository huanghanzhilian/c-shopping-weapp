import { View, Text, ScrollView } from '@tarojs/components'
import { getSystemInfoSync } from '@tarojs/taro'

import { AuthWrapper, BoxLink, Logout, Person } from '@/components'
import { useUserInfo } from '@/hooks'
import IconFont from '@/assets/iconfont'

export default function ProfileScreen() {
  //? Assets
  const { statusBarHeight } = getSystemInfoSync()
  const { userInfo, isLoading } = useUserInfo()

  const profilePaths = [
    {
      name: '我的订单',
      IconName: 'icon-handbag',
      path: '/pages/profile/orders/index',
    },
    {
      name: '我的收藏',
      IconName: 'icon-tubiaozhizuomoban-',
      path: '/pages/profile/lists/index',
    },
    {
      name: '我的评价',
      IconName: 'icon-Comment',
      path: '/pages/profile/reviews/index',
    },
    {
      name: '地址管理',
      IconName: 'icon-locationcity',
      path: '/pages/profile/addresses/index',
    },
    {
      name: '最近访问',
      IconName: 'icon-clock-circle-o',
      path: '/pages/profile/user-history/index',
    },
    {
      name: '账户信息',
      IconName: 'icon-custom-user',
      path: '/pages/profile/personal-info/index',
    },
  ]

  //？Render(s)
  return (
    <>
      <AuthWrapper tips="享受购物（只是演示而已，为技术分享）">
        <ScrollView className="bg-white">
          <View
            style={{ paddingTop: `${statusBarHeight + 160}rpx` }}
            className="flex flex-col bg-white"
          >
            <View className="flex flex-row items-center px-4">
              <Person className="w-12 h-12 mr-5" />
              <View className="flex flex-col flex-1 gap-y-1">
                {isLoading ? (
                  <>
                    <View className="h-5 bg-red-200 rounded-md animate-pulse" />
                    <View className="w-32 h-5 bg-red-200 rounded-md animate-pulse" />
                  </>
                ) : (
                  <>
                    <Text className=" text-xl font-bold">{userInfo?.name}</Text>
                    <Text className="text-sm">{userInfo?.mobile}</Text>
                  </>
                )}
              </View>
              <View href="/profile/personal-info">
                <IconFont name="icon-edit" size={50} color="black" />
              </View>
            </View>

            <View className="mt-7 px-4">
              {profilePaths.map((item, index) => (
                <BoxLink key={index} path={item.path} name={item.name}>
                  <IconFont name={item.IconName} size={34} className="text-gray-700" />
                </BoxLink>
              ))}
              <Logout />
            </View>
          </View>
        </ScrollView>
      </AuthWrapper>
    </>
  )
}
