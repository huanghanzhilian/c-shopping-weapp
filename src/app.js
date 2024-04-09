
import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
import './app.css'

import { store } from '@/store'

// const persistor = persistStore(store)

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App
