import React from 'react'
import Timer from './Timer/Timer'
import Search from './SearchFilter/Search'
import Dark from './DarkLight/Dark'
import Button from './ResuableButton/Button'
import Weather from './Weather/Weather'
import AB from './Context-API/AB'
import { Provider } from 'react-redux'
import { store } from './Redux/B'
import A from './Redux/A'

function App() {
  return (
    <div>
      {/* <Timer/> */}
      {/* <Search/> */}
      {/* <Dark/> */}
      {/* <Button/> */}
      {/* <Weather/> */}
      {/* <AB/> */}
      <Provider store={store}>
        <A/>
      </Provider>
    </div>
  )
}

export default App

