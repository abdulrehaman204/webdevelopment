import React from 'react'
import { Provider } from 'react-redux'
import A from './redux-Toolkit/A'
import store from './redux-Toolkit/store'


function App() {
  return (
   <Provider store={store}>
    <A/>
   </Provider>
  )
}

export default App
