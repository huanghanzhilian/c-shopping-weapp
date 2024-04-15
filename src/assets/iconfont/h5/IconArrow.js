/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconArrow = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M724.48 521.728c-1.8432 7.7824-5.7344 14.848-11.3664 20.48l-341.9136 342.016c-16.6912 16.6912-43.7248 16.6912-60.3136 0s-16.6912-43.7248 0-60.3136L622.6944 512 310.8864 200.0896c-16.6912-16.6912-16.6912-43.7248 0-60.3136 16.6912-16.6912 43.7248-16.6912 60.3136 0l341.9136 341.9136c10.8544 10.8544 14.6432 26.112 11.3664 40.0384z"
        fill={getIconColor(color, 0, '#323233')}
      />
    </svg>
  );
};

IconArrow.defaultProps = {
  size: 18,
};

export default IconArrow;
