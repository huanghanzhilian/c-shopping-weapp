/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconChat1196057Easyiconnet1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M767.424 130.032 256.576 130.032c-70.4 0-128 57.6-128 128l0 335.632c0 70.4 57.6 128 128 128l118.352 0 0 172.288 213.328-172.288 179.152 0c70.4 0 128-57.6 128-128L895.408 258.032C895.424 187.632 837.824 130.032 767.424 130.032zM815.424 593.664c0 26.016-21.984 48-48 48L588.272 641.664 560 641.664l-22 17.76-83.056 67.088 0-4.848 0-80-80 0-118.352 0c-26.016 0-48-21.984-48-48L208.592 258.032c0-26.016 21.984-48 48-48l510.848 0c26.016 0 48 21.984 48 48L815.44 593.664z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M347.888 425.872m-46.608 0a2.913 2.913 0 1 0 93.216 0 2.913 2.913 0 1 0-93.216 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M512 425.872m-46.608 0a2.913 2.913 0 1 0 93.216 0 2.913 2.913 0 1 0-93.216 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M676.096 425.872m-46.608 0a2.913 2.913 0 1 0 93.216 0 2.913 2.913 0 1 0-93.216 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  )
}

IconChat1196057Easyiconnet1.defaultProps = {
  size: 18,
}

export default IconChat1196057Easyiconnet1
