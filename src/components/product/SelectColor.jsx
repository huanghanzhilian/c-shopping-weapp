import { useAppDispatch, useAppSelector } from '@/hooks'
import { Text, View } from '@tarojs/components'

import { setTempColor } from '@/store'
import IconFont from '@/assets/iconfont'

const SelectColor = props => {
  //? Props
  const { colors } = props

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { tempColor } = useAppSelector(state => state.cart)

  //? Render(s)
  return (
    <View className="">
      <View className="flex flex-row items-center justify-between p-4">
        <Text className="text-sm text-gray-700">颜色: {tempColor?.name}</Text>
        <Text className="text-sm text-gray-700">{colors.length} 种颜色</Text>
      </View>
      <View className="flex flex-row flex-wrap gap-3 px-5 my-3">
        {colors.map(item => (
          <View
            key={item.id}
            onClick={() => dispatch(setTempColor(item))}
            className={`rounded-full py-1 px-1.5 flex gap-x-2 flex-row items-center cursor-pointer ${
              tempColor?.id === item.id ? 'border-2 border-sky-500' : ' border-2 border-gray-300'
            }`}
          >
            <View
              className="w-5 h-5 shadow-2xl rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.hashCode }}
            >
              {tempColor?.id === item.id && (
                <IconFont
                  name="icon-round-check_circle_o"
                  size={30}
                  color={`${
                    item.hashCode === '#ffffff'
                      ? 'rgb(229 231 235)'
                      : item.hashCode === '#000000'
                        ? 'rgb(229 231 235)'
                        : 'rgb(255 255 255)'
                  } `}
                />
              )}
            </View>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
      <View className="section-divide-y" />
    </View>
  )
}

export default SelectColor
