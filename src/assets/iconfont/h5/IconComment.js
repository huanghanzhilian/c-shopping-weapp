/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconComment = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M224 768A138.666667 138.666667 0 0 1 85.333333 629.333333v-362.666666A138.666667 138.666667 0 0 1 224 128h576A138.666667 138.666667 0 0 1 938.666667 266.666667v362.666666A138.666667 138.666667 0 0 1 800 768h-244.821333L341.333333 928a53.333333 53.333333 0 0 1-85.290666-42.666667V768h-32z m309.930667-64h266.069333a74.666667 74.666667 0 0 0 74.666667-74.666667v-362.666666a74.666667 74.666667 0 0 0-74.666667-74.666667H224A74.666667 74.666667 0 0 0 149.333333 266.666667v362.666666c0 41.216 33.450667 74.666667 74.666667 74.666667h95.957333v160l213.973334-160z"
        fill={getIconColor(color, 0, '#212121')}
      />
    </svg>
  )
}

IconComment.defaultProps = {
  size: 18,
}

export default IconComment
