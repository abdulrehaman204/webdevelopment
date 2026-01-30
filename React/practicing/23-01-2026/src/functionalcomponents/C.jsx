import React, { Fragment, Profiler } from 'react'

function C() {
  return (
      
    //  <Fragment>
    //     <h1>Hello! This is Fragment</h1>
    //  </Fragment>
     <Profiler>
         <h1>Hello! This is Profiler</h1>
     </Profiler>
  )
}

export default C
