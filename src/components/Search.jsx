import React from 'react'
import { Text, View } from '@tarojs/components'
import IconFont from '@/assets/iconfont'

export default function Search(props) {
  //? Handlers
  const handleSearch = () => {
    router.push('/search')
  }

  //? Render(s)
  return (
    <View
      onPress={handleSearch}
      className="flex-1 flex flex-row rounded-md bg-zinc-200/80 justify-between p-1.5 items-center mr-4"
    >
      <Text className="flex-grow text-left bg-transparent outline-none cursor-pointer text-gray-400 text-sm focus:border-none">
        善假于物，用好搜索...
      </Text>
      <IconFont name="icon-search" size={34} color="#1F2937" />
    </View>
  )
}
