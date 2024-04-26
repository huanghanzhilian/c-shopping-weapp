import { Text, View } from '@tarojs/components'
import { useDispatch } from 'react-redux'

import { decrease, increase, removeFromCart } from '@/store'
import { formatNumber } from '@/utils'
import IconFont from '@/assets/iconfont'

const CartButtons = props => {
  //? Props
  const { item } = props

  //? Assets
  const dispatch = useDispatch()

  //? Render(s)
  return (
    <View className="flex flex-row items-center py-2 text-sm rounded-md bg-white shadow justify-evenly">
      <View onClick={() => dispatch(increase(item.itemID))} className="active:scale-90">
        <IconFont name="icon-plus" size={30} color="rgba(239, 68, 68, 1)" />
      </View>

      <Text className="text-sm min-w-[22px] text-center">{formatNumber(item.quantity)}</Text>

      {item.quantity === 1 ? (
        <View onClick={() => dispatch(removeFromCart(item.itemID))} className="active:scale-90">
          <IconFont name="icon-delete" size={30} color="rgba(239, 68, 68, 1)" />
        </View>
      ) : (
        <View onClick={() => dispatch(decrease(item.itemID))} className="active:scale-90">
          <IconFont name="icon-minus" size={30} color="rgba(239, 68, 68, 1)" />
        </View>
      )}
    </View>
  )
}

export default CartButtons
