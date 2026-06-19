import React from 'react'
import A from './ConditionalRendering/A'
import Profile from './ConditionalRendering/LoginTask/Profile'
import UseState from './Hooks/UseStateHook/UseState'
import API from './Hooks/UseEffectHook/API'
import Count from './Hooks/UseEffectHook/Count'
import Useref from './Hooks/UseRefHook/Useref'
import Custom from './Hooks/CustomHook/Custom'
import ReactMemo from './Memoizations/ReactMemo'
import Usecallback from './Memoizations/Usecallback'
import UseMemo from './Memoizations/UseMemo'
import UserProfile from './Tasks/ConditionalRendering/UserProfile'
import Main from './Tasks/CustomHook/Main'
import ProtectedDashboard from './Tasks/HigherOrderComponent/ProtectedDashboard'

function App() {
  return (
    <div>
      {/* <A/> */}
      {/* <Profile/> */}
      {/* <UseState/> */}
      {/* <API/> */}
      {/* <Count/> */}
      {/* <Useref/> */}
      {/* <Custom/> */}
      {/* <ReactMemo/> */}
      {/* <Usecallback/> */}
      {/* <UseMemo/> */}
      {/* <UserProfile/> */}
      {/* <Main/> */}
      <ProtectedDashboard/>
    </div>
  )
}

export default App

