import moment from 'moment-jalaali'
import { Text, View } from '@tarojs/components'

// import Icons from '../common/Icons'
import ResponsiveImage from '../common/ResponsiveImage'

import { formatNumber } from '@/utils'
import { Link } from '..'
import IconFont from '@/assets/iconfont'

const OrderCard = props => {
  //? Props
  const { order } = props

  //? Render(s)
  return (
    <>
      <View className="py-4 space-y-3 border-b border-gray-200 lg:border lg:rounded-lg ">
        <View className="flex flex-row items-center justify-between lg:px-3">
          <View className="flex flex-row items-center gap-x-2 ">
            {order.delivered ? (
              <View className="p-0.5 w-6 h-6 bg-lime-500 text-white rounded-full flex items-center justify-center">
                <IconFont name="icon-round-check_circle_o" size={40} color="#FFFFFF" />
              </View>
            ) : (
              <View className="p-0.5 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center">
                <IconFont name="icon-clock-circle-o" size={40} color="#FFFFFF" />
              </View>
            )}
            <Text className="text-sm text-black">{order.delivered ? '完成' : '未确认'}</Text>
          </View>
          {order.delivered && (
            <Text className="text-sm text-neutral-500">
              {moment(order.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
            </Text>
          )}
        </View>
        <View className="flex flex-row flex-wrap justify-between lg:px-3">
          <View className="flex flex-row">
            <Text className="text-sm text-neutral-500">订单号:</Text>
            <Text className="ml-2 text-sm text-neutral-500">{order._id}</Text>
          </View>
          <View className="flex flex-row items-center gap-x-1">
            <Text className="text-sm text-neutral-500">¥</Text>
            <Text className="text-sm text-neutral-500">
              {formatNumber(order.totalPrice - order.totalDiscount)}
            </Text>
          </View>
        </View>
        <View className="flex flex-row flex-wrap py-5 gap-x-5 gap-y-3 lg:border-t lg:border-gray-200 lg:px-3">
          {order.cart.map((cartItem, index) => (
            <Link href={`/pages/products/item/index?id=${cartItem.productID}`} key={index} asChild>
              <View>
                <ResponsiveImage
                  dimensions="w-16 h-16"
                  imageStyles="w-16 h-16"
                  src={cartItem.img.url}
                  alt={cartItem.name}
                />
              </View>
            </Link>
          ))}
        </View>
      </View>
    </>
  )
}

export default OrderCard
