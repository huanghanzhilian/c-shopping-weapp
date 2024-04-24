import { View, Swiper, SwiperItem } from '@tarojs/components'

import ResponsiveImage from '../common/ResponsiveImage'

const ImageGallery = props => {
  //? Porps
  const { images, productName } = props

  //? Render(s)
  return (
    <View className="mb-5">
      <Swiper
        className="h-[100vw] w-[100vw]"
        indicatorColor="#E5E7EB"
        indicatorActiveColor="#1D4ED8"
        circular
        indicatorDots
        autoplay
      >
        {images.map((image, index) => (
          <SwiperItem key={index}>
            <ResponsiveImage
              key={index}
              className="h-[100vw] w-full"
              imageStyles="h-[100vw] w-full"
              src={image.url}
              alt={productName}
            />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}

export default ImageGallery
