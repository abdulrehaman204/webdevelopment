import React from 'react'
// import A from './Redux/A'
// import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import AB from './Redux-Toolkit/AB'
// import store from './Redux-Toolkit/Store'
import Profile from './conditionalRendering/Profile'
// import A from './conditionalRendering/A'
import A from './UseEffect/A'
import MyComponent from './UseEffect/MyComponent'
import Click from './EventHandlings/Click'
import Change from './EventHandlings/Change'
import Submit from './EventHandlings/Submit'
import Doctitletwo from './CustomHook1/Doctitletwo'
import AC from './CustomHook2/AC'
import ReactMemo from './Memoizations/ReactMemo'
import UseMemo from './Memoizations/UseMemo'
import Usecallback from './Memoizations/Usecallback'

function App() {
  return (
  // <Provider store={store}>
  //   {/* <A/> */}
  //   {/* <AB/> */}
  // </Provider>
  <div>
    {/* <Profile/> */}
    {/* <A/> */}
    {/* <A/> */}
    {/* <MyComponent/> */}
    {/* <Click/> */}
    {/* <Change/> */}
    {/* <Submit/> */}
    {/* <Doctitletwo/> */}
    {/* <AC/> */}
    {/* <ReactMemo/> */}
    {/* <UseMemo/> */}
    <Usecallback/>
  </div>
  )
}

export default App

