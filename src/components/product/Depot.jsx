import { Text, View } from '@tarojs/components'

import { formatNumber } from '@/utils'
import IconFont from '@/assets/iconfont'

const Depot = ({ inStock }) => {
  //? Render(s)
  if (inStock < 10 && inStock !== 0) {
    return <Text className="text-red-500 text-sm">库存仅剩{formatNumber(inStock)}</Text>
  } else if (inStock > 10) {
    return (
      <View className="flex flex-row items-center text-teal-400 gap-x-1">
        <IconFont name="icon-save" size={40} color="rgb(15 118 110)" />
        <Text className="text-teal-700 text-sm">仓库有售</Text>
      </View>
    )
  } else if (inStock === 0) {
    return null
  }
}

export default Depot
