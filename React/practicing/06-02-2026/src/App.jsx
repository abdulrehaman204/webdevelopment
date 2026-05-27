import React from 'react'
import {Provider} from 'react-redux'
import store from './Toolkit/store'
import A from './Toolkit/A'
// import { store } from './products/store'
// import Ap from './products/Ap'

function App() {
  return (
    <Provider store={store}>
     <A/>
     {/* <Ap/> */}
    </Provider>
  )
}

export default App

