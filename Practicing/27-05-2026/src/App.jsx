import React from 'react'
import C from './LocalState/Usestate/C'
import D from './LocalState/usereducer/D'
import Form from './LocalState/usereducer/A'
// import A from './GlobalState/ContextAPI/A'
import { Provider } from 'react-redux'
// import { store } from './GlobalState/Redux/Store'
// import A from './GlobalState/Redux/A'
import store from './GlobalState/Redux-Toolkit/Store'
import AB from './GlobalState/Redux-Toolkit/AB'


function App() {
  return (
      <Provider store={store}>
    {/* <A/> */}
    <AB/>
  </Provider>
  
  //   <div>
  //   // {/* <C/> */}
  //   // {/* <D/> */}
  //   // {/* <Form/> */}
  //   // {/* <A/> */}
  
  //  </div>
  )
}

export default App

