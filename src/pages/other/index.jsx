import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className="bg-red-200 flex h-[100vh] w-[375rpx]">
      <Text>Hello world 1234!</Text>
    </View>
  )
}
