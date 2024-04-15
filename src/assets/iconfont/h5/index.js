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

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-cart':
      return <IconCart {...rest} />;
    case 'icon-notification':
      return <IconNotification {...rest} />;
    case 'icon-search':
      return <IconSearch {...rest} />;
    case 'icon-fontAwesome_star':
      return <IconFontAwesomeStar {...rest} />;
    case 'icon-arrow':
      return <IconArrow {...rest} />;

  }

  return null;
};

export default IconFont;
