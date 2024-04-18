/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconLocationcity = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M809.984 640l0-86.016-84.010667 0 0 86.016 84.010667 0zM809.984 809.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM553.984 297.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM553.984 470.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM553.984 640l0-86.016-84.010667 0 0 86.016 84.010667 0zM553.984 809.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM297.984 470.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM297.984 640l0-86.016-84.010667 0 0 86.016 84.010667 0zM297.984 809.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM640 470.016l256 0 0 425.984-768 0 0-598.016 256 0 0-84.010667 128-128 128 128 0 256z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </Svg>
  )
}

IconLocationcity.defaultProps = {
  size: 18,
}

IconLocationcity = React.memo ? React.memo(IconLocationcity) : IconLocationcity

export default IconLocationcity
