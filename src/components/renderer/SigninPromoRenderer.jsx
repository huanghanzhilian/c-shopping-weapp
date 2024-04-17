import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default function SigninPromoRenderer(props) {
  //? Props
  const { tips = '立即登录，体验更多' } = props
  //? Handers
  const handleJumpLogin = () => {
    // router.push('/login')
    // Taro.navigateTo('pages/auth/login/index')
    Taro.navigateTo({
      url: '/pages/auth/login/index',
    })
  }
  return (
    <View className="flex flex-col items-center justify-center h-[100vh] space-y-4 bg-white">
      <Image src={require('@/assets/images/sign-in-promo.png')} className="w-[100vw] h-[58vw]" />
      <View className="px-4 space-y-2 flex flex-col items-center justify-center">
        <Text className="text-lg text-neutral-600">你尚未登录</Text>
        <Text className="text-sm text-neutral-600">{tips}</Text>
      </View>
      <View onClick={handleJumpLogin} className="py-2 px-8 flex-center bg-red-500 rounded-full">
        <Text className="text-sm text-white" href="/login">
          去登录
        </Text>
      </View>
    </View>
  )
}
