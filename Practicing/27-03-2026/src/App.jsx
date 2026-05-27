import React from 'react'
import A from './ReduxToolkit/A'
import { store } from './ReduxToolkit/Store'
import { Provider } from 'react-redux'
import AB from './UseReducer/AB'
import ReactMemo from './Memoizations/ReactMemo'
import UseMemo from './Memoizations/UseMemo'
import Usecallback from './Memoizations/Usecallback'

function App() {
  return (
    //  <Provider store={store}>
    //   <A/>
    //  </Provider>
      <div>
        {/* <AB/> */}
        {/* <ReactMemo/> */}
        {/* <UseMemo/> */}
        <Usecallback/>
      </div>
    
  )
}

export default App
