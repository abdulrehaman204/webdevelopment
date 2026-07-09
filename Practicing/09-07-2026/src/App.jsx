import React from 'react'
import UseState from './LocalState/UseState/UseState'
import UseReducer from './LocalState/UseReducer/UseReducer'
import Example from './LocalState/UseReducer/Example'
import Counter from './LocalState/Tasks/Counter with History/Counter'
import Cart from './LocalState/Tasks/Shopping Cart/Cart'
import A from './GlobalState/Context-API/A'
import { Provider } from 'react-redux'
// import { store } from './GlobalState/Redux/Store'
import Redux from './GlobalState/Redux/Redux'
import ReduxToolkit from './GlobalState/Redux-Toolkit/ReduxToolkit'
// import store from './GlobalState/Redux-Toolkit/Store'
import Main from './GlobalState/Tasks/Toggle-Theme-ContextApi/Main'
import Profile from './GlobalState/Tasks/UserProfile-ReduxToolkit/Profile'
import { store } from './GlobalState/Tasks/UserProfile-ReduxToolkit/Store'


function App() {
  return (
    // <div>
    //   {/* <UseState/> */}
    //   {/* <UseReducer/> */}
    //   {/* <Example/> */}
    //   {/* <Counter/> */}
    //   {/* <Cart/> */}
    //   {/* <A/> */}
    //   <Main/>
    // </div>
    <Provider store={store}>
    {/* <Redux/> */}
    {/* <ReduxToolkit/> */}
    <Profile/>
    </Provider>
  )
}

export default App

