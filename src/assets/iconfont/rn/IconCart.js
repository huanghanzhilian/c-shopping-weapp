/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconCart = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 384 768m320 0a64 64 0 1 0 0.032 128.032A64 64 0 0 0 704 768M312.672 512l-51.424-192h560.96l-51.456 192h-458.08z m583.36-224a32 32 0 0 0-32-32H244.064l-34.272-128H96.032v64h64.64L306.4 736H800v-64H355.52l-25.696-96h490.048l12.16-45.376 64-238.88-0.768-0.192c0.16-1.216 0.736-2.272 0.736-3.552z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path d="M448 448h192v-64H448z" fill={getIconColor(color, 1, '#181818')} />
    </Svg>
  )
}

IconCart.defaultProps = {
  size: 18,
}

IconCart = React.memo ? React.memo(IconCart) : IconCart

export default IconCart
