import {combineReducers, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'; // 使用 redux-thunk 来处理中间件

let composedReduer = combineReducers(rootReducer);
// let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// let store = createStoreWithMiddleware(composedReduer);
export default applyMiddleware(thunk)(createStore)(composedReduer);