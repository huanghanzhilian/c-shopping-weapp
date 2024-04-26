import { useController } from 'react-hook-form'
import { Input, Text, View } from '@tarojs/components'

import DisplayError from './DisplayError'

export default function TextField(props) {
  //? Props
  const { label, errors, name, type = 'text', control, direction, ...inputProps } = props

  //? Form Hook
  const { field } = useController({ name, control, rules: { required: true } })
  //? Handlers
  const onChangeHandler = event => {
    const inputValue = event.detail.value

    if (type === 'number' && inputValue.length !== 0) {
      field.onChange(parseInt(inputValue))
    } else {
      field.onChange(inputValue)
    }
  }

  //? Render(s)
  return (
    <View className="w-full">
      {label && <Text className="text-xs text-gray-700 ">{label}</Text>}
      <Input
        className="px-3 py-2 transition-colors border border-solid border-gray-400 rounded-md outline-none bg-zinc-50/30 focus:border-blue-600 leading-none"
        id={name}
        value={field?.value}
        name={field.name}
        onBlur={field.onBlur}
        onInput={onChangeHandler}
        ref={field.ref}
        {...inputProps}
        style={{ marginTop: 10 }}
      />
      <DisplayError errors={errors} />
    </View>
  )
}
