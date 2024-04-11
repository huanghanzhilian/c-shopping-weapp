import { Text, View } from "@tarojs/components";
import { useGetFeedInfoQuery } from '@/services'
import { useLoad } from "@tarojs/taro";


export default function FeedScreen() {
  //? Assets

  //? Get Feeds Query
  const {
    data,
    isLoading,
    isSuccess,
    isFetching,
    error,
    isError,
    refetch,
  } = useGetFeedInfoQuery({ page_size:1, page:1 })
  useGetFeedInfoQuery({ page_size:1, page:2 })
  useGetFeedInfoQuery({ page_size:1, page:1 })
  useGetFeedInfoQuery()
  console.log('useGetFeedInfoQuery', {
    data,
    isLoading,
    isSuccess,
    isFetching,
    error,
    isError,
    refetch,
  })
  
  useLoad(() => {
    console.log('Page loaded.')
  })

  
  //? Render(s)
  return (
    <View className="h-[100vh] bg-red-400">
      <Text className="">feed</Text>
    </View>)
}