import { Text, View } from '@tarojs/components'

import { formatNumber } from '@/utils'

const DiscountCartItem = props => {
  //? Props
  const { discount, price } = props

  //? Assets
  const discountPercent = discount / 100

  //? Render(s)
  return (
    <View>
      <View className="flex flex-row items-center gap-x-1">
        <Text className="text-red-500 text-sm">¥</Text>
        <Text className="text-red-500 text-sm">
          {formatNumber(+(price * discountPercent).toFixed())}
        </Text>

        <Text className="text-red-500 text-sm">折扣</Text>
      </View>
      <View className="flex flex-row items-center gap-x-2">
        <Text className="text-sm text-gray-700">¥</Text>
        <Text className="text-sm text-gray-700">
          {formatNumber(price - (discount * price) / 100)}
        </Text>
      </View>
    </View>
  )
}

export default DiscountCartItem
