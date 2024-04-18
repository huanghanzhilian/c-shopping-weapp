/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconLocationcity = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M809.984 640l0-86.016-84.010667 0 0 86.016 84.010667 0zM809.984 809.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM553.984 297.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM553.984 470.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM553.984 640l0-86.016-84.010667 0 0 86.016 84.010667 0zM553.984 809.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM297.984 470.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM297.984 640l0-86.016-84.010667 0 0 86.016 84.010667 0zM297.984 809.984l0-84.010667-84.010667 0 0 84.010667 84.010667 0zM640 470.016l256 0 0 425.984-768 0 0-598.016 256 0 0-84.010667 128-128 128 128 0 256z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </svg>
  )
}

IconLocationcity.defaultProps = {
  size: 18,
}

export default IconLocationcity
