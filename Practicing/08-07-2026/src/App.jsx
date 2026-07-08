import React from 'react'
import Functional from './Components/Functional'
import Class from './Components/Class'
import Parent from './DataPassing/Parent-To-Child/Parent'
import Parent1 from './DataPassing/Child-To-Parent/Parent1'
import SiblingParent from './DataPassing/Siblling/SiblingParent'
import Top from './PropsDrilling/Top'
import Main from './Projects/User Dashboard with Profile/Main'
import A from './Projects/Shoping cart/A'
import OneWay from './DataBinding/OneWay'
import TwoWay from './DataBinding/TwoWay'
import AA from './DataBinding/Tasks/StudentForm/AA'
import AB from './DataBinding/Tasks/Employee Cart/AB'


function App() {
  return (
    <div>
      {/* <Functional name="Abdul"/> */}
      {/* <Class name="Rehaman"/> */}
      {/* <Parent/> */}
      {/* <Parent1/> */}
      {/* <SiblingParent/> */}
      {/* <Top/> */}
      {/* <Main/> */}
      {/* <A/> */}
      {/* <OneWay/> */}
      {/* <TwoWay/> */}
      {/* <AA/> */}
      <AB/>
    </div>
  )
}

export default App

