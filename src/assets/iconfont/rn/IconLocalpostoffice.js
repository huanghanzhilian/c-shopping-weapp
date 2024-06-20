/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconLocalpostoffice = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 170.666667l-682.666667 0c-47.146667 0-84.906667 38.186667-84.906667 85.333333l-0.426667 512c0 47.146667 38.186667 85.333333 85.333333 85.333333l682.666667 0c47.146667 0 85.333333-38.186667 85.333333-85.333333l0-512c0-47.146667-38.186667-85.333333-85.333333-85.333333zM853.333333 341.333333l-341.333333 213.333333-341.333333-213.333333 0-85.333333 341.333333 213.333333 341.333333-213.333333 0 85.333333z"
        fill={getIconColor(color, 0, '#444444')}
      />
    </Svg>
  )
}

IconLocalpostoffice.defaultProps = {
  size: 18,
}

IconLocalpostoffice = React.memo ? React.memo(IconLocalpostoffice) : IconLocalpostoffice

export default IconLocalpostoffice
