import React from 'react'
// import A from './API-METHODS/A'
import AB from './CONTEXT-API/AB'
import { Provider } from 'react-redux'
import { store } from './CONTEXT-API/A'
import A from './MEMOIZATIONS/A'

function App() {
  return (
  //    <Provider store={store}>
  //   <AB/>
  //  </Provider>
  <div>
    <A/>
    {/* <AB/> */}
  </div>
  )
}

export default App

