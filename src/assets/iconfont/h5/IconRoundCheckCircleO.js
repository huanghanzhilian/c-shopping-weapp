/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconRoundCheckCircleO = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 85.333333C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z m0 768c-188.16 0-341.333333-153.173333-341.333333-341.333333s153.173333-341.333333 341.333333-341.333333 341.333333 153.173333 341.333333 341.333333-153.173333 341.333333-341.333333 341.333333z m165.546667-499.626666L426.666667 604.586667l-80.213334-80.213334a42.496 42.496 0 1 0-60.16 60.16l110.506667 110.506667c16.64 16.64 43.52 16.64 60.16 0L738.133333 413.866667a42.496 42.496 0 0 0 0-60.16c-16.64-16.64-43.946667-16.64-60.586666 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  )
}

IconRoundCheckCircleO.defaultProps = {
  size: 18,
}

export default IconRoundCheckCircleO
