import { createStore, applyMiddleware } from 'redux';

//import {createLogger}                   from "redux-logger"

import thunk from 'redux-thunk';
 
import reducers from '../reducers'; 

const middleware = applyMiddleware(thunk)
 
// Connect our store to the reducers
export default createStore(reducers, middleware);