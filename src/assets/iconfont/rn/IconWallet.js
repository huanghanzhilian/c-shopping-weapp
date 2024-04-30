/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconWallet = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M221.866667 153.6h579.925333c94.2592 0 170.666667 76.407467 170.666667 170.666667v361.5232c0 94.2592-76.407467 170.666667-170.666667 170.666666H221.866667c-94.2592 0-170.666667-76.407467-170.666667-170.666666V324.266667C51.2 230.007467 127.607467 153.6 221.866667 153.6z m0 68.266667a102.4 102.4 0 0 0-102.4 102.4v361.5232a102.4 102.4 0 0 0 102.4 102.4h579.925333a102.4 102.4 0 0 0 102.4-102.4V324.266667a102.4 102.4 0 0 0-102.4-102.4H221.866667z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M113.0496 393.216h149.009067a115.933867 115.933867 0 0 1 0 231.867733h-148.992v68.266667h148.992c101.7344 0 184.2176-82.4832 184.2176-184.2176 0-101.717333-82.4832-184.200533-184.2176-184.200533h-148.992v68.266666z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <Path
        d="M237.858133 547.6864a42.666667 42.666667 0 1 0 0-85.333333 42.666667 42.666667 0 0 0 0 85.333333z"
        fill={getIconColor(color, 2, '#000000')}
      />
    </Svg>
  )
}

IconWallet.defaultProps = {
  size: 18,
}

IconWallet = React.memo ? React.memo(IconWallet) : IconWallet

export default IconWallet
