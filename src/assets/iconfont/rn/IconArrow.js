/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconArrow = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M724.48 521.728c-1.8432 7.7824-5.7344 14.848-11.3664 20.48l-341.9136 342.016c-16.6912 16.6912-43.7248 16.6912-60.3136 0s-16.6912-43.7248 0-60.3136L622.6944 512 310.8864 200.0896c-16.6912-16.6912-16.6912-43.7248 0-60.3136 16.6912-16.6912 43.7248-16.6912 60.3136 0l341.9136 341.9136c10.8544 10.8544 14.6432 26.112 11.3664 40.0384z"
        fill={getIconColor(color, 0, '#323233')}
      />
    </Svg>
  )
}

IconArrow.defaultProps = {
  size: 18,
}

IconArrow = React.memo ? React.memo(IconArrow) : IconArrow

export default IconArrow
