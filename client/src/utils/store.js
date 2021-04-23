//create a store object 
//import reducers
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default store;