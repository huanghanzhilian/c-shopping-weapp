import { useState } from 'react'
import { View, Text, ScrollView, Image, Label, Radio, RadioGroup } from '@tarojs/components'

import {
  AuthWrapper,
  Buttons,
  CartInfo,
  HandleResponse,
  ResponsiveImage,
  // WithAddressModal,
  Link,
} from '@/components'
import { useAppDispatch, useAppSelector, useUserInfo } from '@/hooks'
import { useCreateOrderMutation } from '@/services'
import { clearCart } from '@/store'
import { formatNumber } from '@/utils'
import Taro from '@tarojs/taro'
import IconFont from '@/assets/iconfont'

export default function PaymentScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  // const insets = useSafeAreaInsets()

  //? Get User Data
  const { userInfo } = useUserInfo()

  //? States
  const [paymentMethod, setPaymentMethod] = useState('在线支付')

  //? Store
  const { cartItems, totalItems, totalDiscount, totalPrice } = useAppSelector(state => state.cart)

  //? Create Order Query
  const [postData, { data, isSuccess, isError, isLoading, error }] = useCreateOrderMutation()

  //? Handlers
  const handleCreateOrder = () => {
    if (
      !userInfo?.address?.city &&
      !userInfo?.address?.province &&
      !userInfo?.address?.area &&
      !userInfo?.address?.street &&
      !userInfo?.address?.postalCode
    )
      return Taro.showToast({
        title: '请填写您的地址',
        icon: 'error',
        duration: 2000,
      })
    else
      postData({
        body: {
          address: {
            city: userInfo.address.city.name,
            area: userInfo.address.area.name,
            postalCode: userInfo.address.postalCode,
            provinces: userInfo.address.province.name,
            street: userInfo.address.street,
          },
          mobile: userInfo.mobile,
          cart: cartItems,
          totalItems,
          totalPrice,
          totalDiscount,
          paymentMethod,
        },
      })
  }

  //? Local Components
  const ChangeAddress = ({ addressModalProps }) => {
    const BasicChangeAddress = ({ addressModalProps }) => {
      const { openAddressModal } = addressModalProps || {}
      return (
        <View onPress={openAddressModal} type="button" className="flex items-center ml-auto">
          <IconFont name="icon-arrow" size={30}></IconFont>
        </View>
      )
    }

    return (
      <WithAddressModal>
        <BasicChangeAddress />
      </WithAddressModal>
    )
  }

  return (
    <>
      {/*  Handle Create Order Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={() => {
            dispatch(clearCart())
            router.push('/profile')
          }}
        />
      )}
      <AuthWrapper>
        <View className="h-full bg-white relative">
          <ScrollView className="bg-white pb-20">
            <View className="py-2 space-y-3">
              {/* header */}
              <View className="py-2">
                <View className="flex flex-row items-center justify-evenly">
                  <Link openType="switchTab" asChild href="/pages/tabs/cart/index">
                    <View className="flex flex-col items-center gap-y-2">
                      <IconFont
                        name="icon-ShoppingCart"
                        size={50}
                        color="rgba(252,165,165,1)"
                      ></IconFont>
                      <Text className="font-normal text-sm text-red-300">购物车</Text>
                    </View>
                  </Link>

                  <View className="h-[1px] w-8  bg-red-300" />
                  <View className="flex flex-col items-center gap-y-2">
                    <IconFont name="icon-wallet" size={50} color="rgba(239,68,68,1)"></IconFont>
                    <Text className="text-sm font-normal text-red-500">付款方式</Text>
                  </View>
                </View>
              </View>

              <View className="section-divide-y h-2 bg-gray-100" />

              {/* address */}
              <View className="flex flex-row items-center px-3 py-4 gap-x-3">
                <IconFont name="icon-location" size={40}></IconFont>
                {userInfo?.address ? (
                  <View className="space-y-1">
                    <Text className="text-neutral-700 block text-sm">
                      {userInfo?.address?.street}
                    </Text>
                    <Text className="text-sm text-neutral-600 block">{userInfo?.name}</Text>
                  </View>
                ) : (
                  <Text className="text-neutral-900">填写地址</Text>
                )}
                {/* <ChangeAddress /> */}
              </View>
              <View className="section-divide-y h-2 bg-gray-100" />

              {/* products */}
              <View className="px-2 py-4 mx-3 border border-gray-200 rounded-lg">
                <View className="flex flex-row items-start mb-5">
                  <Image
                    src={require('@/assets/images/car.png')}
                    className="mr-4 w-10 h-10"
                    alt="icon"
                  />
                  <View>
                    <Text className="text-sm text-neutral-700">正常发货</Text>
                    <Text className="text-sm text-neutral-600">有现货</Text>
                  </View>
                  <View className="inline-block px-2 py-1 ml-3 bg-gray-100 rounded-lg h-auto">
                    <Text className="text-neutral-600">{formatNumber(totalItems)} 件商品</Text>
                  </View>
                </View>
                <View className="flex flex-row flex-wrap justify-start gap-x-8 gap-y-5">
                  {cartItems.map(item => (
                    <View key={item.itemID}>
                      <ResponsiveImage
                        dimensions="w-28 h-28"
                        imageStyles="w-28 h-28"
                        src={item.img.url}
                        alt={item.name}
                      />

                      {item.color && (
                        <View className="flex flex-row items-center gap-x-2 ml-3 mt-1.5">
                          <View
                            className="inline-block w-4 h-4 shadow rounded-xl"
                            style={{ backgroundColor: item.color.hashCode }}
                          />
                          <Text className="text-sm text-neutral-600">{item.color.name}</Text>
                        </View>
                      )}

                      {item.size && (
                        <View className="flex flex-row items-center gap-x-2">
                          <IconFont name="icon-ruler" size={30}></IconFont>
                          <Text className="text-sm text-neutral-600">{item.size.size}</Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>

                <Link
                  openType="switchTab"
                  href="/pages/tabs/cart/index"
                  className="inline-block mt-6 text-sm text-sky-500"
                >
                  返回购物车
                </Link>
              </View>

              <View className="section-divide-y h-2 bg-gray-100" />

              {/* cart info */}
              <View className="lg:border lg:border-gray-200 lg:rounded-md lg:h-fit">
                <CartInfo />
                <View className="px-3 py-2 space-y-3">
                  <RadioGroup
                    className="flex gap-x-4"
                    onChange={value => setPaymentMethod(value)}
                    value={paymentMethod}
                  >
                    <Radio
                      className="text-sm text-neutral-600"
                      checked={paymentMethod === '在线支付'}
                      value="在线支付"
                    >
                      在线支付
                    </Radio>
                    <Radio
                      className="text-sm text-neutral-600"
                      checked={paymentMethod === '银行卡'}
                      value="银行卡"
                    >
                      银行卡
                    </Radio>
                  </RadioGroup>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            className="fixed bottom-0 left-0 right-0 z-10 flex flex-row items-center justify-between px-3 py-3 bg-white border-t border-gray-300 shadow-3xl"
            style={{
              bottom: 0,
              // a:insets.bottom
            }}
          >
            <Buttons
              onClick={handleCreateOrder}
              isLoading={isLoading}
              className="w-full max-w-5xl mx-auto"
            >
              完成购买
            </Buttons>
          </View>
        </View>
      </AuthWrapper>
    </>
  )
}
