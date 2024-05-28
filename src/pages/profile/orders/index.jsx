// import { FlashList } from '@shopify/flash-list'
import { useState } from 'react'
import { View, ScrollView } from '@tarojs/components'

import { OrderCard, ShowWrapper, EmptyOrdersList, OrderSkeleton } from '@/components'
import { useGetOrdersQuery } from '@/services'

const OrdersScreen = () => {
  //? Assets
  const [page, setPage] = useState(1)

  //? Get Orders Data
  const { data, hasNextPage, isSuccess, isFetching, error, isError, refetch, originalArgs } =
    useGetOrdersQuery(
      {
        pageSize: 5,
        page,
      },
      {
        selectFromResult: ({ data, ...args }) => {
          return {
            hasNextPage: data?.data?.pagination?.hasNextPage ?? false,
            data,
            ...args,
          }
        },
      }
    )

  //? Handlers
  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    setPage(Number(page) + 1)
  }

  //? Render
  return (
    <>
      <View className="bg-white">
        <ShowWrapper
          error={error}
          isError={isError}
          refetch={refetch}
          isFetching={isFetching}
          isSuccess={isSuccess}
          dataLength={data ? data?.data?.ordersLength : 0}
          emptyComponent={<EmptyOrdersList />}
          loadingComponent={<OrderSkeleton />}
          originalArgs={originalArgs}
        >
          <View className="px-4 py-3 space-y-3 h-full bg-white">
            <ScrollView>
              {data?.data?.orders.map(item => (
                <OrderCard key={item._id} order={item} />
              ))}
            </ScrollView>
            {/* <FlashList
              data={data?.data?.orders}
              renderItem={({ item, index }) => <OrderCard key={item._id} order={item} />}
              onEndReached={onEndReachedThreshold}
              onEndReachedThreshold={0}
              estimatedItemSize={200}
            /> */}
          </View>
        </ShowWrapper>
      </View>
    </>
  )
}
export default OrdersScreen
