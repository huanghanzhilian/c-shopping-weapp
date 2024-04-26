import { View, Text, ScrollView } from '@tarojs/components'

import { AuthWrapper, CartInfo, CartItem, EmptyCart } from '@/components'
import { useAppSelector, useUserInfo } from '@/hooks'
import { formatNumber } from '@/utils'
import { Buttons } from '@/components/index'

export default function CartScreen() {
  //? Get User Data
  const { userInfo, mustAuthAction } = useUserInfo()

  //? Store
  const { cartItems, totalItems, totalPrice, totalDiscount } = useAppSelector(state => state.cart)

  //? Handlers
  const handleRoute = () => {
    mustAuthAction(() => {
      router.push({ pathname: `/payment`, params: {} })
    })
  }

  //? Render(s)

  return (
    <>
      <AuthWrapper tips="享受购物（只是演示而已，为技术分享）">
        {cartItems.length === 0 ? (
          <>
            <View className="h-full space-y-3 bg-white">
              <View className="py-20 flex flex-col">
                <EmptyCart className="mx-auto h-52 w-52" />
                <Text className="text-base font-bold text-center">您的资料库是空的！</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <ScrollView className="bg-white">
              <View className="py-4 mb-20 space-y-3">
                {/* title */}
                <View className="h-fit">
                  <View className="flex flex-row justify-between px-4">
                    <View>
                      <Text className="mb-2 text-sm text-neutral-700 font-bold">您的资料库</Text>
                    </View>
                    <Text className="text-sm text-neutral-700">
                      {formatNumber(totalItems)} 件x品
                    </Text>
                  </View>

                  {/* carts */}
                  <View className="divide-y divide-neutral-200">
                    {cartItems.map(item => (
                      <CartItem item={item} key={item.itemID} />
                    ))}
                  </View>
                </View>
                <View className="section-divide-y h-2 bg-gray-100" />
                {/* cart Info */}
                <View className="">
                  <View className="">
                    <CartInfo handleRoute={handleRoute} cart />
                  </View>
                </View>
              </View>
            </ScrollView>
            {/* to Shipping */}
            <View className="fixed bottom-0 left-0 right-0 z-10 flex flex-row items-center justify-between px-3 py-3 bg-white border-t border-gray-300 shadow-3xl lg:hidden">
              <View>
                <Text className="font-light text-sm text-neutral-700">总计资料库</Text>
                <View className="flex flex-row items-center">
                  <Text className="mr-1 text-sm text-neutral-700">¥</Text>
                  <Text className="text-sm text-neutral-700">
                    {formatNumber(totalPrice - totalDiscount)}
                  </Text>
                </View>
              </View>
              <Buttons className="w-1/2 mr-0" onPress={handleRoute}>
                继续
              </Buttons>
            </View>
          </>
        )}
      </AuthWrapper>
    </>
  )
}
