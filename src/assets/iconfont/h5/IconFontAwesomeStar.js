/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFontAwesomeStar = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M982.848 369.728q0 12.576-14.848 27.424l-207.424 202.272 49.152 285.728q0.576 4 0.576 11.424 0 12-6.016 20.288t-17.44 8.288q-10.848 0-22.848-6.848l-256.576-134.848-256.576 134.848q-12.576 6.848-22.848 6.848-12 0-18.016-8.288t-6.016-20.288q0-3.424 1.152-11.424l49.152-285.728-208-202.272Q32 381.728 32 369.728q0-21.152 32-26.272l286.848-41.728 128.576-260q10.848-23.424 28-23.424t28 23.424l128.576 260 286.848 41.728q32 5.152 32 26.272z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFontAwesomeStar.defaultProps = {
  size: 18,
};

export default IconFontAwesomeStar;
