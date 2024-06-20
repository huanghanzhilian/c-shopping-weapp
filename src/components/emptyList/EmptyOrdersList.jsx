import { Text, View } from '@tarojs/components'
import { OrderEmpty } from '..'

export default function EmptyOrdersList() {
  return (
    <View className="py-20">
      <OrderEmpty className="mx-auto h-52 w-52 block" />

      <Text className="text-center block">列表为空</Text>
    </View>
  )
}
