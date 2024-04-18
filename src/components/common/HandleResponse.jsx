import Taro from '@tarojs/taro'
import { useEffect } from 'react'

export default function HandleResponse(props) {
  //? Porps
  const { isSuccess, isError, error, message, onSuccess, onError } = props

  //? Re-Renders
  useEffect(() => {
    if (isSuccess) {
      if (onSuccess) onSuccess()

      Taro.showToast({
        title: message,
        icon: 'success',
        duration: 2000,
      })
    }

    if (isError) {
      if (onError) onError()

      Taro.showToast({
        title: error,
        icon: 'error',
        duration: 2000,
      })
    }
  }, [])

  return null
}
