import { Text, View } from '@tarojs/components'

export default function OutOfStock() {
  return (
    <View className="mx-3 p-1.5 rounded bg-gray-50/50 my-5">
      <View className="flex items-center justify-between gap-x-2">
        <View className="h-[3px] bg-gray-300 flex-1" />
        <Text className="text-base font-bold text-gray-500">库存不足</Text>
        <View className="h-[3px] bg-gray-300 flex-1" />
      </View>
      <Text className="px-3 block text-sm text-gray-700">
        此x品目前不可用，库存不足，您可以拨打我们电话，在其库存存在后立即通知您。
      </Text>
    </View>
  )
}
