import { Image, Text, View } from '@tarojs/components'

export default function EmptyCustomList() {
  return (
    <View className="flex flex-col items-center justify-center h-[100vh] gap-y-5 bg-white">
      <Image src={require('@/assets/images/list-empty.png')} className="w-[40vw] h-[40vw]" />
      <View className="px-4 flex items-center justify-center">
        <Text className="text-sm text-neutral-600">数据还没准备好呢</Text>
      </View>
    </View>
  )
}
