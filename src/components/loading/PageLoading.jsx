import { View } from '@tarojs/components'

import BigLoading from './BigLoading'

export default function PageLoading() {
  //? Render(s)
  return (
    <View className="fixed h-[100vh] w-[100vw] inset-0 z-40 flex items-center justify-center">
      <BigLoading />
    </View>
  )
}
