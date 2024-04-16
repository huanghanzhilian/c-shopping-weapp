import { View, Image, Swiper, SwiperItem } from '@tarojs/components'

export default function Slider(props) {
  //? Props
  const { data } = props

  //? Render(s)
  if (data?.length === 0) return null

  return (
    <View className="mt-3 rounded-lg overflow-hidden">
      <Swiper
        style={{ height: 150 }}
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        {data
          .filter(item => item.isPublic)
          .map((item, index) => (
            <SwiperItem key={index}>
              <Image src={item.image.url} className="w-full h-full" />
            </SwiperItem>
          ))}
      </Swiper>
    </View>
  )
}
