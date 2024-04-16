import { View } from '@tarojs/components'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <View className={styles['lds-ellipsis']}>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  )
}
