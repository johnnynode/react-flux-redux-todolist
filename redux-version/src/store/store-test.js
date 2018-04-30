/*
  本文件作为Store手写版的实现原理
*/

import {combineReducers, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

// 通过redux中的combineReducers的API, 将所有的reducers组合成一个组合的reducer
let composedReducer = combineReducers(rootReducer);

// thunkMiddleware用于处理Action中传递的数据是字典还是函数(一般是异步操作)
// 中间的参数：{dispatch, getState} 都是applyMiddleware的API内部处理的属于最终store的方法
const thunkMiddleware = ({dispatch}) => {
  return (dispatch) => {
    // 这里的action就是从Action中return的字典或者是函数
    return (action) => {
      if(typeof action === 'function') {
        return action(dispatch); // 如果是函数的话，传入dispatch进行回调, 在内部使用dispatch分发数据字典
      }
      return dispatch(action); // 如果是字典的话，直接dispatch分发字典
    }
  };
}

// 通过redux中的createStore的API, 传入组合的reducer, 最终创建出了redux中的唯一的store
// store会接收来自Action中传递的数据，有可能是字典(直接分发到reducer中去)，有可能是函数(需要回调进一步处理)
// 这个applyMiddleware层这个是处理数据的，可以不传递这个中间件，但是一般都是处理异步操作的
let store = createStore(
  composedReducer,
  applyMiddleware(thunkMiddleware)
); 

export default store;