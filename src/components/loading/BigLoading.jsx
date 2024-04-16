import { View } from '@tarojs/components'

import { Loading, Logo } from '..'

export default function BigLoading() {
  return (
    <View className="flex flex-col items-center p-4 mx-auto space-y-4 text-center rounded-lg bg-red-100/90 max-w-max ">
      <Logo className="w-32 h-10 mx-auto" />
      <Loading />
    </View>
  )
}
