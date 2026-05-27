import React from 'react'
// import Ap from './redux/Ap'
// import store from './redux/store'
import { Provider } from 'react-redux'
import Ap from './redux/Toolkit/Ap'
import store from './redux/toolkit/store'


function App() {
  return (
    <Provider store={store}>
    {/* <Ap/> */}
    <Ap/>
  </Provider>
  )
}

export default App

