import { View, Image, ScrollView } from '@tarojs/components'

import FeedSectionContainer from '../common/FeedSectionContainer'

export default function BannerTwo(props) {
  //? Props
  const { data } = props

  //? Render(s)
  if (data.length === 0) return null

  return (
    <FeedSectionContainer title="推荐专题">
      <ScrollView scrollX>
        <View className=" w-auto whitespace-nowrap">
        {
          data.map((item, index) => (
            <View className="h-[30vw] w-[70vw] mr-4 inline-block" key={index}>
              <Image
                key={index}
                src={item.image.url}
                className="w-full h-full rounded-lg"
              />
            </View>
          ))
        }
        </View>
      </ScrollView>
    </FeedSectionContainer>
  )
}
