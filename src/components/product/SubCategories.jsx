import { ScrollView, Text, View } from '@tarojs/components'

import ResponsiveImage from '../common/ResponsiveImage'
import SubCategoriesSkeleton from '../skeleton/SubCategoriesSkeleton'
import Taro from '@tarojs/taro'

const SubCategories = props => {
  //? Props
  const { childCategories, name, isLoading } = props

  //? Handlers
  const handleRoute = path => {
    Taro.navigateTo({
      url: path,
    })
  }

  //? Render(s)
  return (
    <View className="shrink-0">
      {isLoading ? (
        <View className="px-4 mt-4 mb-2">
          <SubCategoriesSkeleton />
        </View>
      ) : childCategories && childCategories.length > 0 ? (
        <View className="px-4 mt-4 mb-2 space-y-3">
          <View>
            <Text className="text-base text-black">{name}</Text>
          </View>
          <View>
            <ScrollView horizontal className="flex gap-3 pb-2">
              <View className="flex flex-row flex-nowrap w-auto space-x-3">
                {childCategories.map(item => (
                  <View
                    key={item._id}
                    className="px-3 pt-4 pb-2 text-center border-2 border-gray-100 rounded-md"
                    onClick={() => handleRoute(`/pages/products/index?category=${item.slug}`)}
                  >
                    <View>
                      <ResponsiveImage
                        className="w-14 h-14"
                        imageStyles="w-full h-full"
                        src={item.image}
                        alt={item.name}
                      />
                      <Text className="inline-block text-xs text-neutral-600 mt-2 text-center">
                        {item.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default SubCategories
