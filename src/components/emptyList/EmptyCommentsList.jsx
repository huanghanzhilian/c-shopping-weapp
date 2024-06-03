import { Text, View } from '@tarojs/components'
import { OrderEmpty } from '..'

export default function EmptyCommentsList() {
  return (
    <View className="py-20">
      <OrderEmpty className="mx-auto block h-52 w-52" />

      <Text className="text-center block">评论为空</Text>
    </View>
  )
}
