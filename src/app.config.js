export default defineAppConfig({
  pages: [
    
    'pages/tabs/cart/index',
    'pages/tabs/index/index',
    'pages/tabs/category/index',
    'pages/tabs/profile/index'
  ],
  tabBar: {
    custom: false,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/tabs/index/index',
        selectedIconPath: 'assets/tabbar/tabbar_home_on.png',
        iconPath: 'assets/tabbar/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/tabs/category/index',
        selectedIconPath: 'assets/tabbar/tabbar_cate_on.png',
        iconPath: 'assets/tabbar/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/tabs/cart/index',
        selectedIconPath: 'assets/tabbar/tabbar_cart_on.png',
        iconPath: 'assets/tabbar/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/tabs/profile/index',
        selectedIconPath: 'assets/tabbar/tabbar_my_on.png',
        iconPath: 'assets/tabbar/tabbar_my.png',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
