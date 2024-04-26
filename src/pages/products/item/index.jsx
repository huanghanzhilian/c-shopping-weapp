import { View, Text, ScrollView } from '@tarojs/components'
import { getSystemInfoSync, useRouter } from '@tarojs/taro'

import {
  AddToCartOperation,
  Description,
  FreeShipping,
  ImageGallery,
  Info,
  InitialStore,
  OutOfStock,
  Reviews,
  SelectColor,
  SelectSize,
  ShowWrapper,
  SmilarProductsSlider,
  Specification,
  ProductPrice,
} from '@/components'
import { useAppSelector, useTitle } from '@/hooks'
import { useGetSingleProductDetailQuery } from '@/services'
import { formatNumber } from '@/utils'
import { useEffect } from 'react'

export default function SingleProductScreen() {
  //? Assets
  const { params } = useRouter()
  const id = params?.id?.toString() ?? ''
  const setTitle = useTitle('')

  //? Store
  const { totalItems } = useAppSelector(state => state.cart)

  //? Get Feeds Query
  const {
    data: { product = {}, smilarProducts = {} },
    isLoading,
    isSuccess,
    isFetching,
    error,
    isError,
    refetch,
  } = useGetSingleProductDetailQuery(
    { id },
    {
      selectFromResult: ({ data, ...args }) => ({
        data: data?.data || {},
        ...args,
      }),
    }
  )

  //? Re-Renders
  useEffect(() => {
    setTitle(product?.title || '')
  }, [product?.title])

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
        <View className={`h-full bg-white relative ${product.inStock > 0 ? ' pb-20' : 'pb-0'}`}>
          <ScrollView className="">
            <View className="py-4 flex flex-col gap-y-4 ">
              <View className="h-fit">
                <InitialStore product={product} />
                <ImageGallery
                  images={product.images}
                  discount={product.discount}
                  inStock={product.inStock}
                  productName={product.title}
                />
                <View className="">
                  {/* title */}
                  <Text className="p-4 block text-base font-semibold leading-8 tracking-wide text-black/80 ">
                    {product.title}
                  </Text>

                  <View className="p-4 pt-0">
                    <ProductPrice
                      inStock={product.inStock}
                      discount={product.discount}
                      price={product.price}
                      singleProduct
                    />
                  </View>

                  <View className="section-divide-y h-2 bg-gray-100" />

                  {product.inStock > 0 && product.colors.length > 0 && (
                    <SelectColor colors={product.colors} />
                  )}

                  {product.inStock > 0 && product.sizes.length > 0 && (
                    <SelectSize sizes={product.sizes} />
                  )}
                  {product.inStock === 0 && <OutOfStock />}

                  <Info infos={product?.info} />

                  <FreeShipping />
                </View>
              </View>

              <View>
                {product?.description?.length > 0 && (
                  <Description description={product.description} />
                )}
              </View>

              <SmilarProductsSlider smilarProducts={smilarProducts} />
              <View className="section-divide-y h-2 bg-gray-100" />
              <Specification specification={product.specification} />

              <View className="section-divide-y h-2 bg-gray-100" />

              {/* <Reviews
                numReviews={product.numReviews}
                prdouctID={product._id}
                productTitle={product.title}
              /> */}
            </View>
          </ScrollView>
          {product.inStock > 0 && (
            <View className="fixed left-0 right-0 bottom-0 z-20 pb-2 bg-white">
              <AddToCartOperation product={product} />
            </View>
          )}
        </View>
      </ShowWrapper>
    </>
  )
}
