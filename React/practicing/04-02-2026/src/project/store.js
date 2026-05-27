import { createStore } from 'redux';
import coffeeReducer from './reducer';

const store = createStore(coffeeReducer);

export default store;
