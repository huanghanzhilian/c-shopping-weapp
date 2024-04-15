import { Text, View, ScrollView } from "@tarojs/components";
import { useGetFeedInfoQuery } from '@/services'
import { useLoad } from "@tarojs/taro";
import {
  BannerOne,
  BannerTwo,
  BestSellsSlider,
  Categories,
  DiscountSlider,
  Slider as MainSlider,
  MostFavouraiteProducts,
  FeedHeader,
  ShowWrapper
} from '@/components'

export default function FeedScreen() {
  //? Assets

  //? Get Feeds Query
  const {
    data: { childCategories, currentCategory, sliders, bannerOneType, bannerTwoType },
    isLoading,
    isSuccess,
    isFetching,
    error,
    isError,
    refetch,
  } = useGetFeedInfoQuery(
    {},
    {
      selectFromResult: ({ data, ...args }) => ({
        data: data?.data || {},
        ...args,
      }),
    }
  )
  
  useLoad(() => {
    console.log('Page loaded.')
  })

  
  //? Render(s)
  return (
    <>
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        type="detail"
      >
        <View className="h-[100vh] flex flex-col overflow-hidden">
          <FeedHeader title="Home" />
            <ScrollView className="flex flex-auto w-full overflow-y-scroll" scrollY>
              <View className="px-2">
                <MainSlider data={sliders} />
                <Categories
                  childCategories={{ categories: childCategories, title: '所有分类' }}
                  color={currentCategory?.colors?.start}
                  name={currentCategory?.name}
                  homePage
                />
                <DiscountSlider currentCategory={currentCategory} />
                <BannerOne data={bannerOneType} />
                <BestSellsSlider categorySlug={currentCategory?.slug} />
                <BannerTwo data={bannerTwoType} />
                <MostFavouraiteProducts categorySlug={currentCategory?.slug} />
              </View>
            </ScrollView>
          
        </View>
      </ShowWrapper>
    </>
  )
}