/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconLocalpostoffice = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M853.333333 170.666667l-682.666667 0c-47.146667 0-84.906667 38.186667-84.906667 85.333333l-0.426667 512c0 47.146667 38.186667 85.333333 85.333333 85.333333l682.666667 0c47.146667 0 85.333333-38.186667 85.333333-85.333333l0-512c0-47.146667-38.186667-85.333333-85.333333-85.333333zM853.333333 341.333333l-341.333333 213.333333-341.333333-213.333333 0-85.333333 341.333333 213.333333 341.333333-213.333333 0 85.333333z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </svg>
  )
}

IconLocalpostoffice.defaultProps = {
  size: 18,
}

export default IconLocalpostoffice
