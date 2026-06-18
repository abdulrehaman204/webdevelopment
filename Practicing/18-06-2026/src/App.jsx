import React from 'react'
import A from './GlobalState/Context-API/A'
import { Provider } from 'react-redux'
import Redux from './GlobalState/Redux/Redux'
import ReduxToolkit from './GlobalState/Redux-Toolkit/ReduxToolkit'
// import store from './GlobalState/Redux-Toolkit/Store'
import UseState from './LocalState/UseState/UseState'
import UseReducer from './LocalState/UseReducer/UseReducer'
import Example from './LocalState/UseReducer/Example'
import Todo from './Tasks/ToDo-App/Todo'
import ThemeContext from './Tasks/ThemeSwitcher/ThemeContext'
import Navbar from './Tasks/ThemeSwitcher/Navbar'
import Main from './Tasks/ThemeSwitcher/Main'
import Ap from './Tasks/ShoppingCart/Ap'
import { store } from './Tasks/ShoppingCart/Store'
// import { store } from './GlobalState/Redux/Store'


function App() {
  return (
    // <div>
    //   {/* <A/> */}
    //   {/* <UseState/> */}
    //   {/* <UseReducer/> */}
    //   {/* <Example/> */}
    //   {/* <Todo/> */}
    // </div>
    <Provider store={store}>
      {/* <Redux/> */}
      {/* <ReduxToolkit/> */}
      <Ap/>
    </Provider>
    // <ThemeContext>
    //   <Navbar/>
    //   <Main/>
    // </ThemeContext>

  )
}

export default App

