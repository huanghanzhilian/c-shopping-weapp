// import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { Text, View } from '@tarojs/components'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

// import Icons from './common/Icons'
// import Modal from './common/Modal'

import { useDisclosure } from '@/hooks'
import { sorts } from '@/utils'
import { useRouter } from '@tarojs/taro'
import IconFont from '@/assets/iconfont'

const Sort = ({ handleChangeRoute }) => {
  //? Assets
  const [isSort, sortHandlers] = useDisclosure()
  const { params } = useRouter()
  // const insets = useSafeAreaInsets()

  //? State
  const [sort, setSort] = useState(sorts[0])

  //? Handlers
  const handleSortChange = item => {
    setSort(sorts[item.value - 1])
    handleChangeRoute({ sort: item.value })
    sortHandlers.close()
  }

  useEffect(() => {
    if (params.sort) {
      setSort(sorts[+params.sort - 1])
    } else {
      setSort(sorts[0])
    }
  }, [params])

  useEffect(() => {
    setSort(sorts[0])
  }, [params.category])

  //? Render(s)
  return (
    <>
      <View className=" px-3">
        <View className="flex flex-row items-center gap-x-1" onPress={sortHandlers.open}>
          <IconFont name="icon-sort" size={34} color="rgb(82 82 82)" />
          <Text className="text-sm text-neutral-600">{sort?.name}</Text>
        </View>
        {/* <Modal
          isShow={isSort}
          onClose={sortHandlers.close}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          onBackdropPress={sortHandlers.close}
        >
          <Modal.Content
            onClose={sortHandlers.close}
            style={{ paddingTop: insets.top }}
            className="flex flex-col h-[100vh] w-[80vw] px-5 ml-[15vw] bg-white"
          >
            <Modal.Header onClose={sortHandlers.close}>排序</Modal.Header>
            <Modal.Body>
              <View className="divide-y divide-neutral-300">
                {sorts.map((item, i) => (
                  <Pressable
                    onPress={() => handleSortChange(item)}
                    key={i}
                    className="flex flex-row items-center justify-between"
                  >
                    <View className="block py-3 text-left text-gray-700" type="button" name="sort">
                      <Text>{item.name}</Text>
                    </View>
                    {sort?.value === item.value && (
                      <Icons.AntDesign name="checkcircleo" size={16} className="icon" />
                    )}
                  </Pressable>
                ))}
              </View>
            </Modal.Body>
          </Modal.Content>
        </Modal> */}
      </View>
    </>
  )
}

export default Sort
