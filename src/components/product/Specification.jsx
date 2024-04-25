import { RichText, Text, View } from '@tarojs/components'

import { useDisclosure } from '@/hooks'
import IconFont from '@/assets/iconfont'

const Specification = props => {
  //? Props
  const { specification } = props

  //? Assets
  const [isShowSpec, showSpecHandlers] = useDisclosure()

  const renderSpecification = isShowSpec ? specification : specification.slice(0, 7)

  //? Render(s)
  return (
    <View className="px-4">
      <View className="">
        <Text className="mb-3 h-fit w-fit">规格</Text>
        <View className="l">
          <View className="space-y-2">
            {renderSpecification.map((item, i) => {
              if (!item.value) return
              else
                return (
                  <View key={i} className="flex flex-row">
                    <Text className="py-2 ml-3 font-light leading-5 tracking-wide text-gray-500 w-36 text-sm">
                      {item.title}
                    </Text>
                    <View className="flex-auto block w-full py-2 font-normal leading-5 tracking-wide text-gray-600 break-all">
                      <RichText className="text-sm" nodes={item.value} />
                    </View>
                  </View>
                )
            })}
          </View>
          {specification.length > 7 && (
            <View
              className="flex flex-row justify-end items-center py-2 text-sm text-sky-400"
              onClick={showSpecHandlers.toggle}
            >
              {isShowSpec ? (
                <Text className="text-sm text-sky-400">收起</Text>
              ) : (
                <Text className="text-sm text-sky-400">查看更多</Text>
              )}
              {!isShowSpec && <IconFont name="icon-arrow" size={30} color="rgba(56,189,248,1)" />}
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Specification
