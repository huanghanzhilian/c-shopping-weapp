/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconMinus = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 554.666667H213.333333a42.666667 42.666667 0 0 1 0-85.333334h597.333334a42.666667 42.666667 0 0 1 0 85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  )
}

IconMinus.defaultProps = {
  size: 18,
}

IconMinus = React.memo ? React.memo(IconMinus) : IconMinus

export default IconMinus
