import { Text, View } from '@tarojs/components'

export default function DiscountProduct({ discount }) {
  //? Render(s)
  return (
    <View className="bg-red-500 block pt-0.5 px-2 w-fit h-fit leading-none rounded-full overflow-hidden">
      <Text className="text-white text-sm">{discount}%</Text>
    </View>
  )
}
