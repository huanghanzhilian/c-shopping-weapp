import { Text, View } from '@tarojs/components'

import { Address, Skeleton, WithAddressModal } from '@/components'
import { useUserInfo } from '@/hooks'
import IconFont from '@/assets/iconfont'

const BasicAddresses = ({ addressModalProps }) => {
  const { isAddress, address, isLoading, openAddressModal } = addressModalProps || {}

  //? Get User Data
  const { userInfo } = useUserInfo()

  //? Render(s)
  return (
    <>
      <View className="flex h-full bg-white">
        {isLoading ? (
          <View className="flex-1 px-5 ">
            <View className="flex flex-row justify-between py-4 border-b border-gray-200">
              <Skeleton.Item animated="background" height="h-5" width="w-52" />
            </View>
            <View className="my-2 space-y-3 text-gray-500">
              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-location" size={34} color="rgba(107,114,128,1)" />
                <Skeleton.Item animated="background" height="h-5" width="w-40" />
              </View>
              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-localpostoffice" size={34} color="rgba(107,114,128,1)" />
                <Skeleton.Item animated="background" height="h-5" width="w-40" />
              </View>
              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-phone-fill" size={34} color="rgba(107,114,128,1)" />
                <Skeleton.Item animated="background" height="h-5" width="w-40" />
              </View>

              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-custom-user" size={34} color="rgba(107,114,128,1)" />
                <Skeleton.Item animated="background" height="h-5" width="w-40" />
              </View>
            </View>
          </View>
        ) : isAddress ? (
          <View className="flex-1 px-5 ">
            <View className="flex flex-row justify-between py-4 border-b border-gray-200">
              <Text className="text-sm">{address?.street}</Text>
              <View onClick={openAddressModal}>
                <IconFont name="icon-edit" size={34} color="rgba(107,114,128,1)" />
              </View>
            </View>
            <View className="my-2 space-y-3 text-gray-500">
              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-location" size={34} color="rgba(107,114,128,1)" />
                <Text className="text-xs md:text-sm">
                  {address?.province.name}, {address?.city.name}, {address?.area.name}
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-localpostoffice" size={34} color="rgba(107,114,128,1)" />
                <Text className="text-xs md:text-sm">{address?.postalCode}</Text>
              </View>
              {userInfo?.mobile && (
                <View className="flex flex-row items-center gap-x-2 ">
                  <IconFont name="icon-phone-fill" size={34} color="rgba(107,114,128,1)" />
                  <Text className="text-xs md:text-sm">{userInfo?.mobile}</Text>
                </View>
              )}
              <View className="flex flex-row items-center gap-x-2 ">
                <IconFont name="icon-custom-user" size={34} color="rgba(107,114,128,1)" />
                <Text className="text-xs md:text-sm">{userInfo?.name}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View className="flex flex-col w-full items-center py-20 gap-y-4">
            <Address className="h-52 w-52" />
            <Text>您尚未填写地址</Text>
            <View
              className="flex flex-row items-center px-3 py-2 text-red-600 border-2 border-red-600 rounded-lg gap-x-3"
              onClick={openAddressModal}
            >
              <IconFont name="icon-location" size={34} color="rgba(107,114,128,1)" />
              <Text>新增地址</Text>
            </View>
          </View>
        )}
      </View>
    </>
  )
}

const Addresses = () => (
  <WithAddressModal>
    <BasicAddresses />
  </WithAddressModal>
)

export default Addresses
