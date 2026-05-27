
import React, { createContext, useState } from 'react'
import B from './B'

export const MyContext = createContext();

function A() {
  const [a, setA] = useState(100);

  return (
    <MyContext.Provider value={{ a, setA }}>
      <B />
    </MyContext.Provider>
  );
}

export default A;