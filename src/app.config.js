import { useGlobalIconFont } from '@/assets/iconfont/helper'

export default defineAppConfig({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/tabs/index/index',
    'pages/tabs/cart/index',
    'pages/tabs/category/index',
    'pages/tabs/profile/index',
    'pages/auth/login/index',
    'pages/auth/register/index',
    'pages/products/index',
    'pages/products/item/index',
    'pages/checkout/shipping/index',
    'pages/profile/user-history/index',
  ],
  tabBar: {
    custom: false,
    color: '#525252',
    selectedColor: '#000000',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/tabs/index/index',
        selectedIconPath: 'assets/tabbar/tabbar_home_on.png',
        iconPath: 'assets/tabbar/tabbar_home.png',
        text: '首页',
      },
      {
        pagePath: 'pages/tabs/category/index',
        selectedIconPath: 'assets/tabbar/tabbar_cate_on.png',
        iconPath: 'assets/tabbar/tabbar_cate.png',
        text: '分类',
      },
      {
        pagePath: 'pages/tabs/cart/index',
        selectedIconPath: 'assets/tabbar/tabbar_cart_on.png',
        iconPath: 'assets/tabbar/tabbar_cart.png',
        text: '资料库',
      },
      {
        pagePath: 'pages/tabs/profile/index',
        selectedIconPath: 'assets/tabbar/tabbar_my_on.png',
        iconPath: 'assets/tabbar/tabbar_my.png',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
})
