Component({
  properties: {
    // icon-chat1196057easyiconnet1 | icon-Officialofficialtext | icon-StomachRuler | icon-delete | icon-minus | icon-round-check_circle_o | icon-sort | icon-filter | icon-plus | icon-save | icon-locationcity | icon-custom-user | icon-clock-circle-o | icon-logout | icon-edit | icon-tubiaozhizuomoban- | icon-Comment | icon-handbag | icon-cart | icon-notification | icon-search | icon-fontAwesome_star | icon-arrow
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function (color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        })
      },
    },
    size: {
      type: Number,
      value: 18,
      observer: function (size) {
        this.setData({
          svgSize: (size / 750) * tt.getSystemInfoSync().windowWidth,
        })
      },
    },
  },
  data: {
    colors: '',
    svgSize: (18 / 750) * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function () {
      var color = this.data.color
      var hex2rgb = this.hex2rgb

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item
      })
    },
    hex2rgb: function (hex) {
      var rgb = []

      hex = hex.substr(1)

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1')
      }

      hex.replace(/../g, function (color) {
        rgb.push(parseInt(color, 0x10))
        return color
      })

      return 'rgb(' + rgb.join(',') + ')'
    },
  },
})
