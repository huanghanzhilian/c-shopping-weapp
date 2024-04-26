import { View, Image, ScrollView } from '@tarojs/components'

import FeedSectionContainer from '../common/FeedSectionContainer'
import Skeleton from '../common/Skeleton'
import DiscountProduct from '../product/DiscountProduct'
import ProductPrice from '../product/ProductPrice'

import { useGetProductsQuery } from '@/services'
import Taro from '@tarojs/taro'
import { Link } from '..'

export default function DiscountSlider(props) {
  //? Props
  const { currentCategory } = props

  //? Assets

  //? Get Products Query
  const { products, isLoading } = useGetProductsQuery(
    {
      sort: 6,
      category: currentCategory?.slug,
      page_size: 15,
      discount: true,
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.data?.products || [],
        isLoading,
      }),
    }
  )

  //? handlers
  const handleJumptoMore = () => {
    Taro.switchTab({
      url: '/pages/tabs/category/index',
    })
  }

  //? Render(s)
  return (
    <FeedSectionContainer title="x扣x品" showMore onJumptoMore={handleJumptoMore}>
      {isLoading ? (
        <ScrollView scrollX>
          <View className="flex flex-row flex-nowrap w-auto space-x-2">
            {Array(10)
              .fill('_')
              .map((item, index) => (
                <Skeleton.Items className="space-y-2" key={index}>
                  <Skeleton.Item
                    height="h-32 lg:h-36"
                    width="w-32 lg:w-36"
                    animated="background"
                    className="rounded-md mx-auto"
                  />
                  <Skeleton.Item
                    height="h-5"
                    width="w-32"
                    animated="background"
                    className="mt-4 mx-auto"
                  />
                  <Skeleton.Item
                    height="h-5"
                    width="w-20"
                    animated="background"
                    className="mt-4 mx-auto"
                  />
                </Skeleton.Items>
              ))}
          </View>
        </ScrollView>
      ) : !products.length ? null : (
        <ScrollView scrollX>
          <View className="flex flex-row flex-nowrap w-auto">
            {products.map((item, index) => (
              <Link
                href={{
                  pathname: `/pages/products/item/index`,
                  params: { id: item._id },
                }}
                key={item._id}
                asChild
                className="w-fit h-fit bg-white mx-0.5 py-3 px-2"
              >
                <Image src={item?.images[0]?.url} className="w-32 h-32" />
                <View className="flex flex-row mt-1.5 justify-evenly items-start gap-x-2 ">
                  <DiscountProduct discount={item.discount} />
                  <ProductPrice
                    inStock={item?.inStock}
                    discount={item?.discount}
                    price={item?.price}
                  />
                </View>
              </Link>
            ))}
          </View>
        </ScrollView>
      )}
    </FeedSectionContainer>
  )
}
