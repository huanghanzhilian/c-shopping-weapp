import { Text, View } from '@tarojs/components'
import { Address, Icons } from '..'

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
            onPress={handleJumpMore}
            className="flex flex-row items-center gap-x-2"
          >
            <Text className="text-neutral-400 text-base">更多</Text>
            <Icons.Ionicons name="ios-arrow-forward" size={16} color="rgb(163 163 163)" />
          </View>
        )}
      </View>
      {children}
    </View>
  )
}

export default FeedSectionContainer
