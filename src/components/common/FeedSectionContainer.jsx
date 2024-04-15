import { Text, View } from '@tarojs/components'
import IconFont from '@/assets/iconfont'

const FeedSectionContainer = props => {
  //? Props
  const { title, showMore = false, onJumptoMore, children, style = {} } = props

  //? Handlers
  const handleJumpMore = () => {
    onJumptoMore()
  }

  //? Render(s)
  return (
    <View style={style} className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">{title}</Text>
        {showMore && (
          <View
            onClick={handleJumpMore}
            className="flex flex-row items-center gap-x-2"
          >
            <Text className="text-neutral-400 text-base">更多</Text>
            <IconFont name="icon-arrow" size={20} />
          </View>
        )}
      </View>
      {children}
    </View>
  )
}

export default FeedSectionContainer
