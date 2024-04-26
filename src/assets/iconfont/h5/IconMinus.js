/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconMinus = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M810.666667 554.666667H213.333333a42.666667 42.666667 0 0 1 0-85.333334h597.333334a42.666667 42.666667 0 0 1 0 85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  )
}

IconMinus.defaultProps = {
  size: 18,
}

export default IconMinus
