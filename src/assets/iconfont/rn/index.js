/* eslint-disable */

import React from 'react'

import IconSort from './IconSort'
import IconFilter from './IconFilter'
import IconPlus from './IconPlus'
import IconSave from './IconSave'
import IconLocationcity from './IconLocationcity'
import IconCustomUser from './IconCustomUser'
import IconClockCircleO from './IconClockCircleO'
import IconLogout from './IconLogout'
import IconEdit from './IconEdit'
import IconTubiaozhizuomoban from './IconTubiaozhizuomoban'
import IconComment from './IconComment'
import IconHandbag from './IconHandbag'
import IconCart from './IconCart'
import IconNotification from './IconNotification'
import IconSearch from './IconSearch'
import IconFontAwesomeStar from './IconFontAwesomeStar'
import IconArrow from './IconArrow'
export { default as IconSort } from './IconSort'
export { default as IconFilter } from './IconFilter'
export { default as IconPlus } from './IconPlus'
export { default as IconSave } from './IconSave'
export { default as IconLocationcity } from './IconLocationcity'
export { default as IconCustomUser } from './IconCustomUser'
export { default as IconClockCircleO } from './IconClockCircleO'
export { default as IconLogout } from './IconLogout'
export { default as IconEdit } from './IconEdit'
export { default as IconTubiaozhizuomoban } from './IconTubiaozhizuomoban'
export { default as IconComment } from './IconComment'
export { default as IconHandbag } from './IconHandbag'
export { default as IconCart } from './IconCart'
export { default as IconNotification } from './IconNotification'
export { default as IconSearch } from './IconSearch'
export { default as IconFontAwesomeStar } from './IconFontAwesomeStar'
export { default as IconArrow } from './IconArrow'

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-sort':
      return <IconSort key="1" {...rest} />
    case 'icon-filter':
      return <IconFilter key="2" {...rest} />
    case 'icon-plus':
      return <IconPlus key="3" {...rest} />
    case 'icon-save':
      return <IconSave key="4" {...rest} />
    case 'icon-locationcity':
      return <IconLocationcity key="5" {...rest} />
    case 'icon-custom-user':
      return <IconCustomUser key="6" {...rest} />
    case 'icon-clock-circle-o':
      return <IconClockCircleO key="7" {...rest} />
    case 'icon-logout':
      return <IconLogout key="8" {...rest} />
    case 'icon-edit':
      return <IconEdit key="9" {...rest} />
    case 'icon-tubiaozhizuomoban-':
      return <IconTubiaozhizuomoban key="10" {...rest} />
    case 'icon-Comment':
      return <IconComment key="11" {...rest} />
    case 'icon-handbag':
      return <IconHandbag key="12" {...rest} />
    case 'icon-cart':
      return <IconCart key="13" {...rest} />
    case 'icon-notification':
      return <IconNotification key="14" {...rest} />
    case 'icon-search':
      return <IconSearch key="15" {...rest} />
    case 'icon-fontAwesome_star':
      return <IconFontAwesomeStar key="16" {...rest} />
    case 'icon-arrow':
      return <IconArrow key="17" {...rest} />
  }

  return null
}

IconFont = React.memo ? React.memo(IconFont) : IconFont

export default IconFont
