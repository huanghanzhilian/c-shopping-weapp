/* eslint-disable */

import React from 'react';

import IconCart from './IconCart';
import IconNotification from './IconNotification';
import IconSearch from './IconSearch';
import IconFontAwesomeStar from './IconFontAwesomeStar';
import IconArrow from './IconArrow';
export { default as IconCart } from './IconCart';
export { default as IconNotification } from './IconNotification';
export { default as IconSearch } from './IconSearch';
export { default as IconFontAwesomeStar } from './IconFontAwesomeStar';
export { default as IconArrow } from './IconArrow';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-cart':
      return <IconCart key="1" {...rest} />;
    case 'icon-notification':
      return <IconNotification key="2" {...rest} />;
    case 'icon-search':
      return <IconSearch key="3" {...rest} />;
    case 'icon-fontAwesome_star':
      return <IconFontAwesomeStar key="4" {...rest} />;
    case 'icon-arrow':
      return <IconArrow key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
