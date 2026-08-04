import React from 'react'
import Fetch from './API-Calls/Fetch/Fetch'
import A from './API-Calls/Tasks/Dependent-API-Fetch/A'
import FetchTask from './API-Calls/Tasks/Fetch-PaginationLogic/FetchTask'
import Axios from './API-Calls/Axios/Axios'
import B from './API-Calls/Tasks/Product Inventory Dashboard Axios/B'
import Main from './React Routing/Main'
import AB from './LazyLoading/AB'


function App() {
  return (
    <div>
      {/* <Fetch/> */}
      {/* <A/> */}
      {/* <FetchTask/> */}
      {/* <Axios/> */}
      {/* <B/> */}
      {/* <Main/> */}
      <AB/>
    </div>
  )
}

export default App

