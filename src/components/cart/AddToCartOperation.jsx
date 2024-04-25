import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
// import Toast from 'react-native-toast-message'

import CartButtons from './CartButtons'
import { Buttons } from '../common/Buttons'
import ProductPrice from '../product/ProductPrice'

import { useAppDispatch, useAppSelector, useUserInfo } from '@/hooks'
import { addToCart } from '@/store'
import { exsitItem } from '@/utils'
import Taro from '@tarojs/taro'

const AddToCartOperation = props => {
  //? Props
  const { product } = props

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { cartItems, tempColor, tempSize } = useAppSelector(state => state.cart)

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
          title: '此商品缺货',
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
    <View className="flex justify-between  p-3 bg-white border-t border-gray-300 px-5 shadow-3xl ">
      {currentItemInCart ? (
        <View className="flex gap-x-4">
          <View className="w-44">
            <CartButtons item={currentItemInCart} />
          </View>
        </View>
      ) : (
        <Buttons onClick={handleAddItem} className="px-12 text-sm btn ml-0">
          添加到购物车
        </Buttons>
      )}

      <View className="min-w-fit">
        <ProductPrice
          inStock={product.inStock}
          discount={product.discount}
          price={product.price}
          singleProduct
        />
      </View>
    </View>
  )
}

export default AddToCartOperation
