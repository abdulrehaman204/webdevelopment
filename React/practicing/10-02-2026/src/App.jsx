import React from 'react'
// import store from './Toolkit/store'
// import A from './Toolkit/A'
// import { store } from './context-API/A'
// import AB from './context-API/AB'
import {Provider} from 'react-redux'
import A from './redux-Toolkit/A'
import store from './redux-Toolkit/store'


function App() {
  return (
    <Provider store={store}>
     <A/>
     {/* <AB/> */}
    </Provider>
  )
}

export default App

