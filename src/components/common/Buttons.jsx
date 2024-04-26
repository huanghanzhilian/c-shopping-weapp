import Loading from '../loading/Loading'
import { Button, Text } from '@tarojs/components'

export const Buttons = props => {
  //? Props
  const { isLoading = false, children, className = '', isRounded = false, ...restPropps } = props

  //? Render
  return (
    <Button
      disabled={isLoading}
      className={` min-h-10 max flex items-center justify-center outline-none rounded-md active:scale-[.98] bg-red-500 button ${isRounded ? 'rounded-3xl' : ''} ${className}
    `}
      {...restPropps}
    >
      {isLoading ? <Loading /> : <Text className="text-white text-sm">{children}</Text>}
    </Button>
  )
}

export const LoginBtn = ({ children, ...restPropps }) => (
  <Buttons className="mx-auto rounded-3xl w-44" {...restPropps}>
    {children}
  </Buttons>
)

export const SubmitModalBtn = ({ children, ...restPropps }) => (
  <Buttons className="w-full max-w-xl mx-auto rounded-md btn lg:w-64 lg:ml-0" {...restPropps}>
    {children}
  </Buttons>
)
