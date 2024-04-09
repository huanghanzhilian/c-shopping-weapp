import { Text, View } from "@tarojs/components";
import { useGetFeedInfoQuery } from '@/services'
import Taro, { useLoad } from "@tarojs/taro";


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
  } = useGetFeedInfoQuery()
  console.log('useGetFeedInfoQuery', useGetFeedInfoQuery)
  
  // useLoad(() => {
    

    
    // Taro.request({
    //   url: 'http://192.168.1.2:3000/api/category', //仅为示例，并非真实的接口地址
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log('success', res)
    //   }
    // }).then(res => {
    //   console.log('then', res)
    // })
    // console.log('Page loaded.', useGetFeedInfoQuery)
  // })

  
  //? Render(s)
  return (
    <View className="h-[100vh] bg-red-400">
      <Text className="">feed</Text>
    </View>)
}