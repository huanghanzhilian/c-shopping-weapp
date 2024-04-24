import ProductCard from '../product/ProductCard'
import { ScrollView, Text, View } from '@tarojs/components'

const SmilarProductsSlider = props => {
  //? Props
  const { smilarProducts } = props

  //? Render(s)
  return (
    <View className="px-3 py-4 overflow-hidden">
      <Text className="mb-3 w-24 block">{smilarProducts.title}</Text>

      <ScrollView scrollX className="whitespace-nowrap">
        {smilarProducts?.products.map((item, index) => (
          <View key={item._id} className="w-[80vw] inline-block px-2">
            <ProductCard className="" product={item} slide />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default SmilarProductsSlider
