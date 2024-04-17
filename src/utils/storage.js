import Taro from '@tarojs/taro'

export default {
  getItem(key) {
    return Promise.resolve().then(() => {
      return Taro.getStorageSync(key)
    })
  },

  setItem(key, data) {
    return Promise.resolve().then(() => {
      return Taro.setStorage({ key, data })
    })
  },

  removeItem(key) {
    return Taro.removeStorage({ key })
  },

  clear() {
    return Taro.clearStorage()
  },
}
