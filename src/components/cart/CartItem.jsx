import { Text, View } from '@tarojs/components'

import CartButtons from './CartButtons'
import DiscountCartItem from './DiscountCartItem'
// import Icons from '../common/Icons'
import ResponsiveImage from '../common/ResponsiveImage'
import SpecialSell from '../product/SpecialSell'

import { formatNumber } from '@/utils'
import IconFont from '@/assets/iconfont'
import { Link } from '..'

const CartItem = props => {
  //? Props
  const { item } = props

  //? Render(s)
  return (
    <View className="flex flex-row px-4 py-5 space-x-4">
      {/* image & cartButtons */}
      <View className="space-y-4">
        <ResponsiveImage
          dimensions="w-28 h-28"
          imageStyles="w-28 h-28"
          src={item.img.url}
          alt={item.name}
        />

        <View className="mx-auto w-fit">
          <SpecialSell discount={item.discount} inStock={item.inStock} />
        </View>

        <View>
          <CartButtons item={item} />
        </View>
      </View>

      {/* name */}
      <View className="flex-auto">
        <View className="mb-3 ">
          <Link
            className="text-sm"
            href={{
              pathname: `/pages/products/item/index`,
              params: { id: item.productID },
            }}
          >
            {item.name}
          </Link>
        </View>

        {/* info */}
        <View className="space-y-3">
          {item.color && (
            <View className="flex flex-row items-center gap-x-2">
              <View
                className="inline-block w-5 h-5 shadow rounded-xl"
                style={{ backgroundColor: item.color.hashCode }}
              />
              <Text className="font-light text-sm">{item.color.name}</Text>
            </View>
          )}
          {item.size && (
            <View className="flex flex-row items-center gap-x-2">
              <IconFont name="icon-StomachRuler" size={40} />
              <Text className="font-light text-sm">{item.size.size}</Text>
            </View>
          )}
          <View className="flex flex-row items-center gap-x-2">
            <IconFont name="icon-Officialofficialtext" size={30} />
            <Text className="font-light text-sm">正品保证和发货保证</Text>
          </View>
          <View className="flex flex-row items-center gap-x-2">
            <IconFont name="icon-save" size={40} color="rgba(15,118,110,1)" />
            <Text className="font-light text-sm">仓库有</Text>
          </View>
          {item.discount > 0 ? (
            <View>
              <DiscountCartItem discount={item.discount} price={item.price} />
            </View>
          ) : (
            <View className="flex items-center gap-x-2">
              <Text className="text-sm text-gray-700">¥</Text>
              <Text className="text-sm text-gray-700">{formatNumber(item.price)}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default CartItem
