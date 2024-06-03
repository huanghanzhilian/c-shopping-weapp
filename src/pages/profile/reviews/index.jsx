import { useState } from 'react'
import { ScrollView, View } from '@tarojs/components'

import { ReveiwCard, ShowWrapper, EmptyCommentsList, ReveiwSkeleton } from '@/components'
import { useGetReviewsQuery } from '@/services'

const ReviewsScreen = () => {
  //? Assets
  const [page, setPage] = useState(1)

  //*   Get Reviews
  const { data, hasNextPage, isSuccess, isFetching, error, isError, refetch, originalArgs } =
    useGetReviewsQuery(
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

  //? Render(s)
  return (
    <>
      <View className="bg-white">
        <ShowWrapper
          error={error}
          isError={isError}
          refetch={refetch}
          isFetching={isFetching}
          isSuccess={isSuccess}
          dataLength={data ? data?.data?.reviewsLength : 0}
          emptyComponent={<EmptyCommentsList />}
          loadingComponent={<ReveiwSkeleton />}
          originalArgs={originalArgs}
        >
          <View className="px-4 py-3 space-y-3 h-full">
            {/* <ReveiwSkeleton /> */}
            <ScrollView>
              {data?.data?.reviews.map(item => (
                <ReveiwCard key={item._id} item={item} />
              ))}
            </ScrollView>
            {/* <FlashList
              data={data?.data?.reviews}
              renderItem={({ item, index }) => <ReveiwCard key={item._id} item={item} />}
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

export default ReviewsScreen
