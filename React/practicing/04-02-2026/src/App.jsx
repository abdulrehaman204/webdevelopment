
import A from './redux/A'
 import { store } from './redux/B'

import { Provider } from 'react-redux';
// import store from './project/store';
import CoffeeShop from './project/CoffeeShop';

import React from 'react';


function App() {
  return (
   <Provider store={store}>
    <A/>
    {/* <CoffeeShop/> */}
  </Provider>
  )
}

export default App






