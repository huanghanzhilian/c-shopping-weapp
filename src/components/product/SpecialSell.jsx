import { Text, View } from '@tarojs/components'

const SpecialSell = props => {
  //? Props
  const { discount, inStock } = props

  //? Render(s)
  if (discount > 0 && inStock !== 0) {
    return (
      <View className="bg-red-500 px-2 py-1 rounded-full leading-none overflow-hidden">
        <Text className="text-white text-xs">特价销售</Text>
      </View>
    )
  } else {
    return null
  }
}

export default SpecialSell
