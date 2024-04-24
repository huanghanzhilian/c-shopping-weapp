import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from '@tarojs/components'

import { HandleResponse, Logo, TextField, Buttons, Link } from '@/components'
import { useAppDispatch } from '@/hooks'
import { useLoginMutation } from '@/services'
import { userLogin } from '@/store'
import { logInSchema } from '@/utils'
import Taro from '@tarojs/taro'

export default function LoginScreen() {
  //? Assets
  const dispatch = useAppDispatch()

  //? Login User
  const [login, { data, isSuccess, isError, isLoading, error }] = useLoginMutation()

  //? Form Hook
  const {
    handleSubmit,
    formState: { errors: formErrors },
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: { email: '', password: '' },
  })

  //? Focus On Mount
  useEffect(() => {
    setFocus('name')
  }, [])

  //? Handlers
  const onSubmit = ({ email, password }) => {
    if (email && password) {
      login({
        body: { email, password },
      })
    }
  }

  const onSuccess = () => {
    dispatch(userLogin(data.data.token))
    Taro.navigateBack()
  }

  return (
    <>
      {/*  Handle Login Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message || '发生异常'}
          message={data?.message}
          onSuccess={onSuccess}
        />
      )}
      <View className="h-[100%]  bg-white pt-10">
        <View className="w-[100vw] px-8 py-6 space-y-4">
          <Logo className="mx-auto block w-40 h-16" />
          <Text className="block text-neutral-700">登录</Text>
          <View className="space-y-0">
            <TextField
              errors={formErrors.email}
              placeholder="请输入您的账户邮箱"
              name="email"
              control={control}
            />

            <TextField
              errors={formErrors.password}
              password
              placeholder="请输入您的账户密码"
              name="password"
              control={control}
            />
            <Buttons isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
              登录
            </Buttons>
          </View>

          <View className="flex flex-row">
            <Text className="inline mr-2 text-gray-800 text-xs">我还没有账户</Text>
            <Link
              openType="redirectTo"
              href="/pages/auth/register/index"
              className="text-blue-400 text-xs"
            >
              去注册
            </Link>
          </View>
        </View>
      </View>
    </>
  )
}
