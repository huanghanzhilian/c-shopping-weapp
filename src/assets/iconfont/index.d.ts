/* eslint-disable */
import React, { FunctionComponent } from 'react'

interface Props {
  name:
    | 'icon-sort'
    | 'icon-filter'
    | 'icon-plus'
    | 'icon-save'
    | 'icon-locationcity'
    | 'icon-custom-user'
    | 'icon-clock-circle-o'
    | 'icon-logout'
    | 'icon-edit'
    | 'icon-tubiaozhizuomoban-'
    | 'icon-Comment'
    | 'icon-handbag'
    | 'icon-cart'
    | 'icon-notification'
    | 'icon-search'
    | 'icon-fontAwesome_star'
    | 'icon-arrow'
  size?: number
  color?: string | string[]
  style?: React.CSSProperties
}

declare const IconFont: FunctionComponent<Props>

export default IconFont
