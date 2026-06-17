import React from 'react'
import Functional from './Components/Functional'
import Class from './Components/Class'
import Parent from './DataPassing/Parent-To-Child/Parent'
import Parent2 from './DataPassing/Child-To-Parent/Parent2'
import TopParent from './DataPassing/SibblingComponents/TopParent'
import Oneway from './DataBinding/Oneway'
import Twoway from './DataBinding/Twoway'
import Main from './PropsDrilling/Main'
import A from './PropsDestructing/A'
import AB from './MiniProjects/StudentManagement/AB'
import AA from './MiniProjects/EmployeeDashboards/AA'


function App() {
  return (
    <div>
      {/* <Functional name="Abdul"/> */}
      {/* <Class name="Rehaman"/> */}
      {/* <Parent/> */}
      {/* <Parent2/> */}
      {/* <TopParent/> */}
      {/* <Oneway/> */}
      {/* <Twoway/> */}
      {/* <Main/> */}
      {/* <A/> */}
      {/* <AB/> */}
      <AA/>
    </div>
  )
}

export default App

