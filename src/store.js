// 构建 store 参数较多，将其独立一个文件

import { createStore } from 'redux';
import reducer from './reducers';

// 初始值
const INITIAL = {
  todos: []
};

export default createStore(
  reducer,
  INITIAL,
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.devToolsExtension && window.devToolsExtension()
);
