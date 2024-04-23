import { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'

import { ShowWrapper, Link } from '@/components'
import { useGetCategoriesQuery } from '@/services'

export default function CategoryScreen() {
  //? Get Categories Query
  const { categories, isSuccess, isFetching, error, isError, refetch } = useGetCategoriesQuery(
    undefined,
    {
      selectFromResult: ({ data, ...args }) => ({
        categories: data?.data?.categories || [],
        ...args,
      }),
    }
  )

  //? State
  const [activeMinCat, setActiveMinCat] = useState({})

  //? Handlers
  const handleActive = cat => {
    setActiveMinCat(cat)
  }

  //? Re-Renders
  useEffect(() => {
    if (categories.length) setActiveMinCat(categories?.filter(category => category.level === 1)[0])
  }, [categories])

  //? Render(s)
  return (
    <>
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        type="list"
        dataLength={categories?.length ?? 0}
      >
        <View className="flex h-[100vh] flex-row bg-white">
          <ScrollView className="bg-neutral-100 h-full w-3/12 shrink-0">
            {categories.length
              ? categories
                  .filter(category => category.level === 1)
                  .map(levelOneCategory => (
                    <View
                      className={`flex flex-col items-center py-3 px-2 space-y-2 border-b border-r border-neutral-200 ${activeMinCat._id === levelOneCategory._id ? ' bg-white border-r-0' : ''}`}
                      key={levelOneCategory._id}
                      onClick={() => handleActive(levelOneCategory)}
                    >
                      <View className=" w-7 h-7 rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                        <Image src={levelOneCategory.image} className="w-7 h-7" />
                      </View>
                      <Text className="text-gray-700 text-sm">{levelOneCategory.name}</Text>
                    </View>
                  ))
              : null}
          </ScrollView>
          <ScrollView className="bg-white w-9/12 ml-2">
            <View className="p-2 space-y-3">
              {activeMinCat
                ? categories?.map(levelTwoCategory => {
                    if (levelTwoCategory.parent === activeMinCat._id) {
                      return (
                        <View className="space-y-3 py-2" key={levelTwoCategory._id}>
                          <Link
                            href={`/pages/products/index?category=${levelTwoCategory.slug}`}
                            asChild
                          >
                            <Text className="break-words text-neutral-900">
                              {levelTwoCategory.name}
                            </Text>
                          </Link>

                          <View className="grid grid-cols-3 gap-4">
                            {categories
                              .filter(category => category.parent === levelTwoCategory._id)
                              .map((levelThreeCategory, index) => (
                                <Link
                                  key={levelThreeCategory._id}
                                  className="flex flex-col items-center gap-y-2"
                                  href={`/pages/products/index?category=${levelThreeCategory.slug}`}
                                  asChild
                                >
                                  <View className="flex items-center justify-center w-full aspect-square rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                                    <Image
                                      key={index}
                                      src={levelThreeCategory.image}
                                      className="w-10 h-10"
                                    />
                                  </View>
                                  <Text className="text-gray-700 text-sm">
                                    {levelThreeCategory.name}
                                  </Text>
                                </Link>
                              ))}
                          </View>
                        </View>
                      )
                    }
                  })
                : null}
            </View>
          </ScrollView>
        </View>
      </ShowWrapper>
    </>
  )
}
