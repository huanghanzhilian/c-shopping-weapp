import React from 'react'
import { Image, Text, View, ScrollView } from '@tarojs/components'

import FeedSectionContainer from './common/FeedSectionContainer'

export default function Categories(props) {
  //? Props
  const { childCategories, color, name } = props
  
  //? Re-Renders
  if (childCategories.categories.length > 0 && color && name) {
    return (
      <FeedSectionContainer title="分类" showMore={true}>
        <ScrollView scrollX>
          <View className="flex flex-row flex-nowrap w-auto">
            {childCategories.categories.map((item, index) => (
              <View key={item._id} className="flex flex-col items-center mr-3 space-y-2">
                <View className="w-14 h-14 rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                  <Image
                    key={index}
                    src={item.image}
                    className="w-full h-full"
                  />
                </View>
                <Text className="text-gray-700 whitespace-nowrap">{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </FeedSectionContainer>
    )
  }
  return null
}
