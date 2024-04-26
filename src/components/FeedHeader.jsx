import { Text, View } from '@tarojs/components'

import Search from './Search'

import { useAppSelector } from '@/hooks'
import { formatNumber } from '@/utils'
import { Link, Logo } from '.'
import IconFont from '@/assets/iconfont'
import { getSystemInfoSync } from '@tarojs/taro'

export default function FeedHeader() {
  //? Assets
  const { statusBarHeight } = getSystemInfoSync()

  //? Store
  const { totalItems } = useAppSelector(state => state.cart)

  //? Handlers
  const handleIconClick = path => {
    // router.push(path)
  }

  //? Render(s)
  return (
    <View style={{ paddingTop: `${statusBarHeight + 60}rpx` }} className="p-3 bg-white shadow-sm">
      <View className="flex flex-row items-center justify-between">
        <Logo className="w-[240rpx] h-[80rpx]" />
      </View>
      <View className="flex flex-row items-center justify-between">
        <Search />
        <View className="flex flex-row space-x-3 pr-1">
          <View>
            <IconFont name="icon-notification" size={44} color="#1F2937" />
          </View>

          <Link className="relative" openType="switchTab" asChild href="/pages/tabs/cart/index">
            <IconFont name="icon-cart" size={44} color="#1F2937" />
            {formatNumber(totalItems) && (
              <View className="absolute -top-3 -right-3 bg-red-500 rounded-md w-5 h-5 p-0.5 flex items-center justify-center">
                <Text className="text-center text-xs text-white">{formatNumber(totalItems)}</Text>
              </View>
            )}
          </Link>
        </View>
      </View>
    </View>
  )
}
