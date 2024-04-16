import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'

export default function createSvgComponent(svgPath) {
  return function SvgComponent(props) {
    return <Image src={svgPath} {...props} />
  }
}
