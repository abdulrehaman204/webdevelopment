import React from 'react'
import Fetch from './API-Calls/Fetch/Fetch'
import TaskFetch from './API-Calls/Tasks/TaskFetch'
import Axios from './API-Calls/Axios/Axios'
import Router from './ReactRouting/Router'
import Lazy from './LazyLoading/Lazy'

function App() {
  return (
    <div>
      {/* <Fetch/> */}
      {/* <TaskFetch/> */}
      {/* <Axios/> */}
      {/* <Router/> */}
      <Lazy/>
    </div>
  )
}

export default App
