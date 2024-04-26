/* eslint-disable */

import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { getIconColor } from './helper'

let IconDelete = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M935.5 189H697v-64.13c0-33-27-60-60-60H387c-33 0-60 27-60 60V189H89.5c-13.75 0-25 11.25-25 25v10c0 13.75 11.25 25 25 25h50.187v651.887c0 32.99 27 59.983 60 59.983h622c33 0 60-26.992 60-59.983V249H935.5c13.75 0 25-11.25 25-25v-10c0-13.75-11.25-25-25-25zM387 124.978a0.901 0.901 0 0 1 0.107-0.107h249.785v-0.001c0.037 0.031 0.076 0.07 0.108 0.108V189H387v-64.022zM199.687 900.887l0.5-651.811H327v0.001h370v-0.001h124.187l0.5 651.811h-622z"
        fill={getIconColor(color, 0, '#141414')}
      />
      <Path
        d="M599.561 333.081c-16.5 0-30 13.5-30 30v424.942c0 16.5 13.5 30 30 30s30-13.5 30-30V363.081c0-16.5-13.5-30-30-30zM421.813 333.081c-16.5 0-30 13.5-30 30v424.942c0 16.5 13.5 30 30 30s30-13.5 30-30V363.081c0-16.5-13.5-30-30-30z"
        fill={getIconColor(color, 1, '#141414')}
      />
    </Svg>
  )
}

IconDelete.defaultProps = {
  size: 18,
}

IconDelete = React.memo ? React.memo(IconDelete) : IconDelete

export default IconDelete
