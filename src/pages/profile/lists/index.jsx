import { Text, View } from '@tarojs/components'

import { FavoritesListEmpty } from '@/components'

const ListsScreen = () => {
  //? Render(s)
  return (
    <>
      <View className="py-20 bg-white h-full">
        <FavoritesListEmpty className="mx-auto h-52 w-52 block" />
        <Text className="text-center block">您的收藏夹列表为空</Text>
        <Text className="block my-3 text-base text-center text-amber-500 block">（即将上线）</Text>
      </View>
    </>
  )
}

export default ListsScreen
