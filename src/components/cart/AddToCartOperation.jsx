import { useState, useEffect } from 'react'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useAppDispatch, useAppSelector, useUserInfo } from '@/hooks'
import { addToCart } from '@/store'
import { exsitItem, formatNumber } from '@/utils'
import CartButtons from './CartButtons'
import { Buttons } from '../common/Buttons'
import { Link } from '..'
import IconFont from '@/assets/iconfont'

const AddToCartOperation = props => {
  //? Props
  const { product } = props

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { cartItems, tempColor, tempSize, totalItems } = useAppSelector(state => state.cart)

  //? State
  const [currentItemInCart, setCurrentItemInCart] = useState(undefined)

  //? Get User Data
  const { userInfo, mustAuthAction } = useUserInfo()

  //? Re-Renders
  useEffect(() => {
    const item = exsitItem(cartItems, product._id, tempColor, tempSize)
    setCurrentItemInCart(item)
  }, [tempColor, tempSize, cartItems])

  //? handlers
  const handleAddItem = () => {
    mustAuthAction(() => {
      if (product.inStock === 0)
        return Taro.showToast({
          title: '此x品缺货',
          duration: 2000,
        })

      dispatch(
        addToCart({
          productID: product._id,
          name: product.title,
          price: product.price,
          discount: product.discount,
          inStock: product.inStock,
          sold: product.sold,
          color: tempColor,
          size: tempSize,
          img: product.images[0],
          quantity: 1,
        })
      )
    })
  }

  //? Render(s)
  return (
    <View className="flex items-center justify-between  p-3 bg-white border-t border-gray-300 px-5 shadow-3xl ">
      <View className="min-w-fit flex justify-center gap-x-4">
        <View className="flex flex-col items-center">
          <IconFont name="icon-chat1196057easyiconnet1" size={44} color="rgba(82,82,82,1)" />
          <Text className="text-xs text-neutral-600">客服</Text>
        </View>
        <Link
          className="flex flex-col items-center relative"
          openType="switchTab"
          asChild
          href="/pages/tabs/cart/index"
        >
          <IconFont name="icon-cart" size={44} color="rgba(82,82,82,1)" />
          <Text className="text-xs text-neutral-600">资料库</Text>
          {formatNumber(totalItems) && (
            <View className="absolute -top-2 right-0 bg-red-500 rounded-md w-5 h-5 p-0.5 flex items-center justify-center">
              <Text className="text-center text-xs text-white">{formatNumber(totalItems)}</Text>
            </View>
          )}
        </Link>
      </View>
      {currentItemInCart ? (
        <View className="flex gap-x-4">
          <View className="w-44">
            <CartButtons item={currentItemInCart} />
          </View>
        </View>
      ) : (
        <Buttons onClick={handleAddItem} className="px-12 text-sm btn m-0">
          添加到资料库
        </Buttons>
      )}
    </View>
  )
}

export default AddToCartOperation
