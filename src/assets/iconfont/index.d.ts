/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'icon-cart' | 'icon-notification' | 'icon-search' | 'icon-fontAwesome_star' | 'icon-arrow';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
