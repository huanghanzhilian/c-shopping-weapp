import { Text, View } from '@tarojs/components'

const Info = props => {
  //? Props
  const { infos } = props

  //? Render(s)
  return (
    <View className="px-4 pb-2">
      <Text className="block py-3 text-neutral-800">属性</Text>
      <View className="ml-1 gap-y-2">
        {infos.map((item, i) => (
          <View key={i} className="flex flex-row gap-x-2 tracking-wide">
            <Text className="text-gray-700 text-sm leading-6 font-light">{item.title} :</Text>
            <Text className="text-gray-500 text-sm flex-1 leading-6">{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Info
