import React, { useState } from 'react';

function OneWay() {
  const [name, setName] = useState("Ravi");

  return <h1>Hello {name}</h1>;
}

export default OneWay;