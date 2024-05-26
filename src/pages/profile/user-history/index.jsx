import { Text, View, ScrollView } from '@tarojs/components'

import { EmptyCart, ResponsiveImage, Link } from '@/components'
import { useAppSelector } from '@/hooks'
import { truncate } from '@/utils'

const UserHistoryScreen = () => {
  //? Store
  const { lastSeen } = useAppSelector(state => state.user)

  //? selector
  return (
    <>
      {lastSeen.length > 0 ? (
        <ScrollView scrollY enableFlex enhanced showScrollbar={false}>
          <View className="space-y-4 bg-white w-full px-3">
            {lastSeen.map(item => (
              <View className="border-b border-gray-200 " key={item.productID}>
                <Link href={`/products/${item.productID}`} asChild>
                  <View className="flex flex-row items-center gap-4 py-4 ">
                    <ResponsiveImage
                      className="w-36 h-36 md:mx-auto"
                      imageStyles="w-36 h-36"
                      src={item.image.url}
                      alt={item.title}
                    />

                    <Text className="flex-1 px-3 text-left text-gray-800 leadiri-6 text-sm ">
                      {truncate(item.title, 80)}
                    </Text>
                  </View>
                </Link>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="py-20">
          <EmptyCart className="mx-auto h-52 w-52" />
          <Text className="text-center">您的最近访问列表为空</Text>
        </View>
      )}
    </>
  )
}

export default UserHistoryScreen
