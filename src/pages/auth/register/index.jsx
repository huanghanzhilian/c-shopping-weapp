import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView, Text, View } from '@tarojs/components'

import { Buttons, HandleResponse, Logo, TextField, Link } from '@/components'
import { useAppDispatch } from '@/hooks'
import { useCreateUserMutation } from '@/services'
import { userLogin } from '@/store'
import { registerSchema } from '@/utils'
import Taro from '@tarojs/taro'

export default function RegisterScreen() {
  //? Assets
  const dispatch = useAppDispatch()

  //? Create User
  const [createUser, { data, isSuccess, isError, isLoading, error }] = useCreateUserMutation()

  //? Form Hook
  const {
    handleSubmit,
    formState: { errors: formErrors },
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  //? Focus On Mount
  useEffect(() => {
    setFocus('name')
  }, [])

  //? Handlers
  const onSubmit = ({ name, email, password }) => {
    if (name && email && password) {
      createUser({
        body: { name, email, password },
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
          error={error?.data?.message}
          message="注册成功"
          onSuccess={onSuccess}
        />
      )}
      <ScrollView className="h-[100%] bg-white pt-10">
        <View className="w-[100vw] px-8 py-6 space-y-4">
          <Logo className="mx-auto w-40 h-16" />
          <Text className="block text-neutral-700">注册</Text>
          <View className="space-y-0">
            <TextField
              errors={formErrors.name}
              placeholder="请输入您的账户名称"
              name="name"
              control={control}
            />
            <TextField
              errors={formErrors.email}
              placeholder="请输入您的账户邮箱"
              name="email"
              keyboardType="email-address"
              autoCapitalize="none"
              control={control}
            />

            <TextField
              errors={formErrors.password}
              secureTextEntry
              placeholder="请输入您的账户密码"
              name="password"
              password
              control={control}
            />
            <TextField
              control={control}
              errors={formErrors.confirmPassword}
              secureTextEntry
              password
              placeholder="确认密码，请再次输入"
              name="confirmPassword"
            />
            <Buttons isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
              注册
            </Buttons>
          </View>
          <View className="flex flex-row">
            <Text className="inline mr-2 text-gray-800 text-xs">我已经有账户了</Text>
            <Link
              openType="redirectTo"
              href="/pages/auth/login/index"
              className="text-blue-400 text-xs"
            >
              去登录
            </Link>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
