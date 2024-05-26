import IconFont from '@/assets/iconfont'
import { Text, View } from '@tarojs/components'
import { Link } from '..'

export default function BoxLink(props) {
  //? Props
  const { children, path, name } = props

  //? Assets

  //? Render(s)
  return (
    <Link asChild href={path} className="transition-colors">
      <View className="flex flex-row items-center py-4 text-xs text-gray-700 border-b border-gray-300">
        {children}
        <Text className="mr-auto ml-3 text-gray-700">{name}</Text>
        <IconFont name="icon-arrow" size={30} className="text-gray-700" />
      </View>
    </Link>
  )
}
