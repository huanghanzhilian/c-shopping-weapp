import { Text, View } from '@tarojs/components'

import { useAppSelector } from '@/hooks'
import { formatNumber } from '@/utils'

const CartInfo = props => {
  //? Porps
  const { handleRoute, cart } = props

  //? Store
  const { totalItems, totalPrice, totalDiscount } = useAppSelector(state => state.cart)

  //? Render(s)
  return (
    <View className="px-4 py-2 mt-2 space-y-5 lg:mt-0 lg:h-fit lg:py-4">
      {/* total cart price */}
      <View className="pb-2 border-b border-gray-200 flex flex-row justify-between">
        <Text className="text-sm text-neutral-700">x品x格({formatNumber(totalItems)}件x品)</Text>
        <View className="flex-center flex-row">
          <Text className="mr-1 text-neutral-700 text-sm">¥</Text>
          <Text className="text-neutral-700 text-sm">{formatNumber(totalPrice)}</Text>
        </View>
      </View>

      {/* total cart items */}
      <View className="flex flex-row justify-between">
        <Text className="text-neutral-700 text-sm">总计资料库</Text>
        <View className="flex-center flex-row">
          <Text className="ml-r text-neutral-700 text-sm">¥</Text>
          <Text className="text-neutral-700 text-sm">
            {formatNumber(totalPrice - totalDiscount)}
          </Text>
        </View>
      </View>

      <View className="inline-block w-full pb-2 border-b border-gray-200 text-neutral-700 text-sm">
        运费是根据您的货件的地址、交货时间、重量和体积计算的
      </View>

      {/* total cart profit */}
      <View className="flex flex-row justify-between">
        <Text className="text-red-500 text-sm">您从体验中省去的金额</Text>
        <View className="flex-center flex-row gap-x-1">
          <Text className="text-red-500 text-sm">
            ({((totalDiscount / totalPrice) * 100).toFixed(1)}%)
          </Text>
          <Text className="mr-1 text-red-500 text-sm">¥</Text>
          <Text className="text-red-500 text-sm">{formatNumber(totalDiscount)}</Text>
        </View>
      </View>
    </View>
  )
}

export default CartInfo
