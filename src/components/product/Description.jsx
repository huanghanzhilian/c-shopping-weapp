import { Text, View } from '@tarojs/components'

import { useDisclosure } from '@/hooks'
import { truncate } from '@/utils'
import IconFont from '@/assets/iconfont'

const Description = props => {
  //? Porps
  const { description } = props

  //? Assets
  const [isShowDesc, showDescHandlers] = useDisclosure()

  //? Render(s)
  return (
    <View>
      <View className="px-3">
        <Text className="mb-3 block w-fit">介绍</Text>
        <Text className="text-sm leading-6 tracking-wider text-gray-500">
          {isShowDesc ? description : truncate(description, 300)}
        </Text>
        {description.length > 300 && (
          <View
            className="flex flex-row items-center justify-end py-2"
            onClick={showDescHandlers.toggle}
          >
            {isShowDesc ? (
              <Text className="text-sm text-sky-400">收起</Text>
            ) : (
              <Text className="text-sm text-sky-400">查看更多</Text>
            )}
            {!isShowDesc && <IconFont name="icon-arrow" size={30} className="text-sky-400" />}
          </View>
        )}
      </View>
      <View className="section-divide-y " />
    </View>
  )
}

export default Description
