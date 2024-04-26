/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconChat1196057Easyiconnet1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M767.424 130.032 256.576 130.032c-70.4 0-128 57.6-128 128l0 335.632c0 70.4 57.6 128 128 128l118.352 0 0 172.288 213.328-172.288 179.152 0c70.4 0 128-57.6 128-128L895.408 258.032C895.424 187.632 837.824 130.032 767.424 130.032zM815.424 593.664c0 26.016-21.984 48-48 48L588.272 641.664 560 641.664l-22 17.76-83.056 67.088 0-4.848 0-80-80 0-118.352 0c-26.016 0-48-21.984-48-48L208.592 258.032c0-26.016 21.984-48 48-48l510.848 0c26.016 0 48 21.984 48 48L815.44 593.664z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M347.888 425.872m-46.608 0a2.913 2.913 0 1 0 93.216 0 2.913 2.913 0 1 0-93.216 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 425.872m-46.608 0a2.913 2.913 0 1 0 93.216 0 2.913 2.913 0 1 0-93.216 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M676.096 425.872m-46.608 0a2.913 2.913 0 1 0 93.216 0 2.913 2.913 0 1 0-93.216 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  )
}

IconChat1196057Easyiconnet1.defaultProps = {
  size: 18,
}

IconChat1196057Easyiconnet1 = React.memo
  ? React.memo(IconChat1196057Easyiconnet1)
  : IconChat1196057Easyiconnet1

export default IconChat1196057Easyiconnet1
