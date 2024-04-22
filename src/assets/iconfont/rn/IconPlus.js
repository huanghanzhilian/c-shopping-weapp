/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconPlus = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  )
}

IconPlus.defaultProps = {
  size: 18,
}

IconPlus = React.memo ? React.memo(IconPlus) : IconPlus

export default IconPlus
