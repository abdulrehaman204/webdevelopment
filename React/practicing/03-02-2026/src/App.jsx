import React from 'react'
import { Provider } from 'react-redux'
import { store } from './globalstate/redux/A'
import A from './globalstate/redux/contextAPI/A'



function App() {
  return (
   <Provider store={store}>
    <A/>
   </Provider>
  )
}

export default App





