import React from 'react'
import Counter from './LocalStateManagement/UseState/CounterApp/Counter'
import Todo from './LocalStateManagement/UseState/Todo List/Todo'
import Paasword from './LocalStateManagement/UseState/ShowHide-Password/Paasword'
import Count from './LocalStateManagement/UseReducer/CounterApp/Count'
import Cart from './LocalStateManagement/UseReducer/Shopping Cart/Cart'
import Main from './GlobalStateManagement/Context-API/Theme Toggle/Main'
import Theme from './LocalStateManagement/UseReducer/Theme Switcher/Theme'
import A from './GlobalStateManagement/Context-API/User Authentication/A'
import Redux from './GlobalStateManagement/Redux/Counter/Redux'
import { Provider } from 'react-redux'
// import { store } from './GlobalStateManagement/Redux/Counter/Store'
import Todos from './GlobalStateManagement/Redux/Todo App/Todos'
// import { store } from './GlobalStateManagement/Redux/Todo App/TodoStore'
import Toolkit from './GlobalStateManagement/Redux-Toolkit/Toolkit'
import { store } from './GlobalStateManagement/Redux-Toolkit/Store'

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Paasword/> */}
      {/* <Count/> */}
      {/* <Cart/> */}
      {/* <Theme/> */}
      {/* <Main/> */}
      {/* <A/> */}
      <Provider store={store}>
        {/* <Redux/> */}
        {/* <Todos/> */}
        <Toolkit/>
      </Provider>
    </div>
    
  )
}

export default App

