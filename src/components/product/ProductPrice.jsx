import { Text, View } from '@tarojs/components'

import DiscountProduct from './DiscountProduct'

import { formatNumber } from '@/utils'

const ProductPrice = props => {
  //? Props
  const { singleProduct, inStock, discount, price } = props

  //? Render(s)
  return (
    <View className={`${(singleProduct && 'flex flex-row') || 'flex flex-col'}`}>
      <View className="flex flex-row items-center self-end">
        <Text
          className={` ${(singleProduct && 'text-red-500 text-base') || 'text-gray-700 text-sm'}`}
        >
          ¥ {formatNumber(price - (discount * price) / 100)}
        </Text>
      </View>

      {discount > 0 && (
        <View className="flex flex-row self-end">
          <Text className="ml-2 text-sm text-gray-500 line-through">¥ {formatNumber(price)} </Text>
        </View>
      )}
    </View>
  )
}

export default ProductPrice
