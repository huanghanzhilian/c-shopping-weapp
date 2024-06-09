import { Text, View } from '@tarojs/components'

import { Skeleton } from '@/components'
import { useDisclosure, useUserInfo } from '@/hooks'
import IconFont from '@/assets/iconfont'

const PersonalInfoScreen = () => {
  //? Assets
  const [isShowNameModal, nameModalHandlers] = useDisclosure()
  const [isShowPhoneModal, phoneModalHandlers] = useDisclosure()

  //? Get User Data
  const { userInfo, isLoading } = useUserInfo()

  //? Local Component
  const InfoField = ({ label, info, editHandler, isLoading }) => (
    <View className="flex px-5">
      <View className="w-full flex flex-row items-center justify-between py-4 border-b border-gray-200">
        <View className="flex flex-col w-full gap-y-2">
          <Text className="text-xs text-gray-700">{label}</Text>
          {isLoading ? (
            <Skeleton.Item animated="background" height="h-5" width="w-44" />
          ) : (
            <Text className="h-5 text-sm">{info}</Text>
          )}
        </View>
        {isLoading ? null : info ? (
          <IconFont
            name="icon-edit"
            size={36}
            className="cursor-pointer icon"
            onClick={editHandler}
          />
        ) : (
          <IconFont
            name="icon-plus"
            size={36}
            className="cursor-pointer icon"
            onClick={editHandler}
          />
        )}
      </View>
    </View>
  )

  //? Render(s)
  return (
    <>
      {!isLoading && userInfo && (
        <>
          {/* <UserNameModal
            isShow={isShowNameModal}
            onClose={nameModalHandlers.close}
            editedData={userInfo.name}
          />
          <UserMobileModal
            isShow={isShowPhoneModal}
            onClose={phoneModalHandlers.close}
            editedData={userInfo.mobile}
          /> */}
        </>
      )}
      <View className="h-full bg-white">
        <InfoField
          label="名字和姓氏"
          info={userInfo?.name}
          editHandler={nameModalHandlers.open}
          isLoading={isLoading}
        />
        <InfoField
          label="电话号码"
          info={userInfo?.mobile}
          editHandler={phoneModalHandlers.open}
          isLoading={isLoading}
        />
      </View>
    </>
  )
}

export default PersonalInfoScreen
