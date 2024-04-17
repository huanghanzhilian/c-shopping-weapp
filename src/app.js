import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from '@/store'
import './app.css'

const persistor = persistStore(store)

function App({ children }) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default App
