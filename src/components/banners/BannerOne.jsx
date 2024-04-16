import { View, Image } from '@tarojs/components'

import FeedSectionContainer from '../common/FeedSectionContainer'

export default function BannerOne(props) {
  //? Props
  const { data } = props

  //? Render(s)
  if (data.length === 0) return null
  return (
    <FeedSectionContainer title="今日专题">
      <View className="grid grid-cols-2 gap-2 px-2">
        {data.map((item, index) => (
          <View className="h-[20vw] w-full" key={index}>
            <Image key={index} src={item.image.url} className="w-full h-full rounded-lg" />
          </View>
        ))}
      </View>
    </FeedSectionContainer>
  )
}
