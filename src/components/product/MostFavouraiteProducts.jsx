import { View, Text, Image } from '@tarojs/components'

import DiscountProduct from './DiscountProduct'
import ProductPrice from './ProductPrice'
import FeedSectionContainer from '../common/FeedSectionContainer'
import Skeleton from '../common/Skeleton'

import { useGetProductsQuery } from '@/services'
import IconFont from '@/assets/iconfont'
import { Link } from '..'

export default function MostFavouraiteProducts(props) {
  //? Props
  const { categorySlug } = props

  //? Get Products Query
  const { products, isLoading } = useGetProductsQuery(
    {
      sort: 5,
      category: categorySlug,
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.data?.products,
        isLoading,
      }),
    }
  )

  //? Render(s)
  return (
    <FeedSectionContainer title="热销x品">
      <View className="grid grid-cols-2 gap-1">
        {isLoading
          ? Array(10)
              .fill('_')
              .map((_, index) => (
                <Skeleton.Items key={index} className="p-1">
                  <Skeleton.Item
                    height="h-32 md:h-36"
                    width="w-28 md:w-32"
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
              ))
          : products?.map((product, index) => (
              <Link
                href={{
                  pathname: `/pages/products/item/index`,
                  params: { id: product._id },
                }}
                asChild
                key={product._id}
                className="p-1 transition border border-gray-50"
              >
                <View className="flex flex-row items-center gap-x-2">
                  <Text className="text-base">{product.rating.toFixed(1)}</Text>
                  <IconFont name="icon-fontAwesome_star" size={30} color="rgb(251 191 36)" />
                </View>
                <Image src={product.images[0].url} className="h-32 w-28 my-3 block mx-auto" />
                <View
                  className={`flex flex-row items-start mt-2 gap-x-2 ${
                    product.discount ? 'justify-evenly' : 'justify-end pl-8'
                  }`}
                >
                  {product.discount ? <DiscountProduct discount={product.discount} /> : null}
                  <ProductPrice
                    inStock={product.inStock}
                    discount={product.discount}
                    price={product.price}
                  />
                </View>
              </Link>
            ))}
      </View>
    </FeedSectionContainer>
  )
}
