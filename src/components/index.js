import createSvgComponent from '@/utils/createSvgComponent'

// //* OTHER COMPONENTS
// export { default as Search } from './Search'
export { default as Categories } from './Categories'
export { default as FeedHeader } from './FeedHeader'
export { default as Logout } from './Logout'
export { default as Sort } from './Sort'
export { default as FreeShipping } from './FreeShipping'

// //* COMMON COMPONENTS
export { default as Skeleton } from './common/Skeleton'
export { default as FeedSectionContainer } from './common/FeedSectionContainer'
export { default as ShowWrapper } from './common/ShowWrapper'
export { default as AuthWrapper } from './common/AuthWrapper'
// export { default as AuthMustWrapper } from './common/AuthMustWrapper'
export { default as TextField } from './common/TextField'
export { default as DisplayError } from './common/DisplayError'
export { default as HandleResponse } from './common/HandleResponse'
export { default as BoxLink } from './common/BoxLink'
export { default as ResponsiveImage } from './common/ResponsiveImage'
export { default as Link } from './common/Link'
// export { default as Modal } from './common/Modal'
// export { default as WithAddressModal } from './common/WithAddressModal'
// export { default as Combobox } from './common/Combobox'
export * from './common/Buttons'

// //* LOADING
export { default as Loading } from './loading/Loading'
export { default as BigLoading } from './loading/BigLoading'
export { default as PageLoading } from './loading/PageLoading'

// //* RENDERER
export { default as SigninPromoRenderer } from './renderer/SigninPromoRenderer'

// //* EMPTY LIST COMPONENTS
// export { default as EmptyCustomList } from './emptyList/EmptyCustomList'
// export { default as EmptyComment } from './emptyList/EmptyComment'
export { default as EmptyOrdersList } from './emptyList/EmptyOrdersList'
export { default as EmptyCommentsList } from './emptyList/EmptyCommentsList'
// export { default as EmptySearchList } from './emptyList/EmptySearchList'

// //* SLIDER COMPONENTS
export { default as Slider } from './sliders/Slider'
export { default as DiscountSlider } from './sliders/DiscountSlider'
export { default as BestSellsSlider } from './sliders/BestSellsSlider'
export { default as SmilarProductsSlider } from './sliders/SmilarProductsSlider'
export { default as OrderSkeleton } from './skeleton/OrderSkeleton'

// //* BANNER COMPONENTS
export { default as BannerOne } from './banners/BannerOne'
export { default as BannerTwo } from './banners/BannerTwo'

// //* PRODUCT COMPONENTS
export { default as MostFavouraiteProducts } from './product/MostFavouraiteProducts'
export { default as DiscountProduct } from './product/DiscountProduct'
export { default as ProductPrice } from './product/ProductPrice'
export { default as SubCategories } from './product/SubCategories'
export { default as ProductCard } from './product/ProductCard'
export { default as SpecialSell } from './product/SpecialSell'
// export { default as Depot } from './product/Depot'
export { default as ImageGallery } from './product/ImageGallery'
export { default as SelectColor } from './product/SelectColor'
export { default as SelectSize } from './product/SelectSize'
export { default as InitialStore } from './product/InitialStore'
export { default as OutOfStock } from './product/OutOfStock'
export { default as Info } from './product/Info'
export { default as Description } from './product/Description'
export { default as Specification } from './product/Specification'

// //* CART COMPONENTS
export { default as AddToCartOperation } from './cart/AddToCartOperation'
export { default as CartButtons } from './cart/CartButtons'
export { default as CartItem } from './cart/CartItem'
export { default as CartInfo } from './cart/CartInfo'
export { default as DiscountCartItem } from './cart/DiscountCartItem'

// //* ORDERS COMPONENTS
export { default as OrderCard } from './order/OrderCard'

// //* REVIEW COMPONENTS
// export { default as Reviews } from './review/Reviews'
// export { default as ReviewProductCard } from './review/ReviewProductCard'
export { default as ReveiwCard } from './review/ReveiwCard'

// //* FILTER COMPONENTS
export { default as Filter } from './filter/Filter'

// //* SKELETON
export { default as SubCategoriesSkeleton } from './skeleton/SubCategoriesSkeleton'
export { default as ProductSkeleton } from './skeleton/ProductSkeleton'
export { default as ReveiwSkeleton } from './skeleton/ReveiwSkeleton'

// //* MODAL COMPONENTS
// export { default as UserMobileModal } from './modals/UserMobileModal'
// export { default as UserNameModal } from './modals/UserNameModal'
// export { default as AddressModal } from './modals/AddressModal'

// //* SVGs
export const Logo = createSvgComponent(require('./svgs/logo.svg'))
export const OrderEmpty = createSvgComponent(require('./svgs/order-empty.svg'))
export const EmptySearch = createSvgComponent(require('./svgs/empty-search.svg'))
export const LogoH = createSvgComponent(require('./svgs/logo-h.svg'))
export const LogoChina = createSvgComponent(require('./svgs/logoChina.svg'))
export const FreeShippingSvg = createSvgComponent(require('./svgs/freeShipping.svg'))
export const Person = createSvgComponent(require('./svgs/person.svg'))
export const EmptyCart = createSvgComponent(require('./svgs/empty-cart.svg'))
export const Address = createSvgComponent(require('./svgs/address.svg'))
export const FavoritesListEmpty = createSvgComponent(require('./svgs/favorites-list-empty.svg'))
export const ExpressDelivery = createSvgComponent(require('./svgs/express-delivery.svg'))
export const Support = createSvgComponent(require('./svgs/support.svg'))
export const CashOnDelivery = createSvgComponent(require('./svgs/cash-on-delivery.svg'))
export const Daysreturn = createSvgComponent(require('./svgs/days-return.svg'))
export const OriginalProducts = createSvgComponent(require('./svgs/original-products.svg'))
