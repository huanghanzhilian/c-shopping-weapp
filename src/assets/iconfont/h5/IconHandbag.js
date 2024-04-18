/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconHandbag = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M131.6 896c-2.4 0-4.8 0-7.2-0.4-35.2-4-60.4-35.6-56.4-70.8l56.8-512v-0.4c4-32 31.2-56.4 63.6-56.4h646.4c32.4 0 59.6 24.4 63.6 56.4v0.4l56.8 512c0.4 2 0.4 4.4 0.4 6.8 0 17.2-6.4 33.2-18.4 45.2-12 12-28 18.8-45.2 19.2H131.6zM188.4 320.4L132 832h760.4L835.6 320.4s0-0.4-0.4-0.4l-646.8 0.4c0.4-0.4 0.4-0.4 0 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M672 448c-17.6 0-32-14.4-32-32V288c0-70.4-57.6-128-128-128S384 217.6 384 288v128c0 17.6-14.4 32-32 32s-32-14.4-32-32V288c0-106 86-192 192-192s192 86 192 192v128c0 17.6-14.4 32-32 32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  )
}

IconHandbag.defaultProps = {
  size: 18,
}

export default IconHandbag
