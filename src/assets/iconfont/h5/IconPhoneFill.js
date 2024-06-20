/* eslint-disable */

import React from 'react'
import { getIconColor } from './helper'

const DEFAULT_STYLE = {
  display: 'block',
}

const IconPhoneFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M398.652952 165.692952c-32.280381-46.006857-58.172952-61.318095-92.867047-54.808381-14.969905 2.80381-24.210286 7.850667-41.20381 22.528l-12.946285 11.361524-25.185524 20.894476-6.582857 5.753905c-3.705905 3.413333-6.38781 6.217143-9.825524 10.118095-64 72.46019-81.724952 185.782857-44.470857 292.327619 26.794667 76.55619 74.605714 152.624762 142.774857 228.644572 72.289524 80.62781 133.046857 131.364571 202.922666 168.374857 54.857143 29.013333 96.865524 41.74019 145.676191 43.227429 59.001905 1.828571 110.957714-11.50781 153.648762-39.15581a162.133333 162.133333 0 0 0 19.553524-15.189333l8.289523-7.558095 16.335239-15.213715 5.534476-4.924952 10.922666-9.435429c22.040381-19.651048 29.184-31.939048 30.646858-51.370666 2.194286-29.647238-11.215238-52.736-49.737143-85.699048l-26.063238-21.820952-12.117334-10.581334-11.459047-9.825524c-37.229714-30.744381-64.804571-40.69181-100.205715-35.35238-24.283429 3.632762-38.278095 12.141714-63.073523 38.107428l-10.947048 11.654095c-18.041905 19.017143-28.330667 26.258286-43.544381 29.305905-22.25981 4.461714-44.373333-7.046095-80.262095-36.205714-46.250667-37.546667-84.626286-80.676571-117.613715-131.949714-22.869333-35.766857-31.890286-62.902857-24.941714-87.600762 2.82819-9.99619 9.679238-17.042286 24.064-28.184381l14.994286-11.312762 2.413714-1.877334 22.747429-18.553904c20.114286-16.822857 28.281905-28.281905 32.572952-45.836191 8.899048-36.10819 0.487619-66.072381-32.426667-117.638095l-15.62819-24.234667-5.558857-8.533333-6.436572-9.435429z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  )
}

IconPhoneFill.defaultProps = {
  size: 18,
}

export default IconPhoneFill
