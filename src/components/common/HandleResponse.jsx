import Taro from '@tarojs/taro'
import { useEffect } from 'react'
// import Toast from 'react-native-toast-message'

export default function HandleResponse(props) {
  //? Porps
  const { isSuccess, isError, error, message, onSuccess, onError } = props

  //? Re-Renders
  useEffect(() => {
    if (isSuccess) {
      if (onSuccess) onSuccess()
      // Toast.show({
      //   type: 'success',
      //   text2: message,
      // })
      Taro.showToast({
        title: message,
        icon: 'success',
        duration: 2000,
      })
    }

    if (isError) {
      if (onError) onError()
      // Toast.show({
      //   type: 'error',
      //   text2: error,
      // })
      Taro.showToast({
        title: error,
        icon: 'error',
        duration: 2000,
      })
    }
  }, [])

  return null
}
