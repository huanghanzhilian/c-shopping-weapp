/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconSave = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M455.111111 227.555556h-38.968889L227.555556 374.613333V796.444444h568.888888V227.555556h-56.888888v227.555555a56.888889 56.888889 0 0 1-56.888889 56.888889H512a56.888889 56.888889 0 0 1-56.888889-56.888889V227.555556z m-38.968889-56.888889H796.444444a56.888889 56.888889 0 0 1 56.888889 56.888889v568.888888a56.888889 56.888889 0 0 1-56.888889 56.888889H227.555556a56.888889 56.888889 0 0 1-56.888889-56.888889V374.613333a56.888889 56.888889 0 0 1 21.902222-44.828444l188.529778-147.057778A56.888889 56.888889 0 0 1 416.142222 170.666667zM512 227.555556v227.555555h170.666667V227.555556H512z m-28.444444 398.222222h227.555555a28.444444 28.444444 0 1 1 0 56.888889h-227.555555a28.444444 28.444444 0 1 1 0-56.888889z"
        fill={getIconColor(color, 0, '#5A6677')}
      />
    </svg>
  )
}

IconSave.defaultProps = {
  size: 18,
}

export default IconSave
