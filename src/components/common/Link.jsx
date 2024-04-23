import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React from 'react'
import qs from 'qs'

const Link = ({ href, children, openType = 'navigateTo', asChild, ...restProps }) => {
  const handleClick = () => {
    if (typeof href === 'string') {
      Taro[openType]({ url: href })
    } else if (typeof href === 'object' && href.pathname) {
      Taro[openType]({
        url: href.pathname + (href.params ? `?${qs.stringify(href.params)}` : ''),
      })
    }
  }

  return (
    <>
      {asChild ? (
        <View onClick={handleClick} {...restProps}>
          {children}
        </View>
      ) : (
        <Text onClick={handleClick} {...restProps}>
          {children}
        </Text>
      )}
    </>
  )
}

export default Link
