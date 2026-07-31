import React, { useState } from 'react'
import WithLogger from './withLogger';
import Profile from './Profile';

const LoggedProfile = WithLogger(Profile);

function AR() {
    const [age, setAge] = useState(25);
  return (
    <div>
        <LoggedProfile
        name="Abdul"
        age={age}
      />

      <button onClick={() =>setAge(age + 1)}>Increase Age</button>
    </div>
  )
}

export default AR
