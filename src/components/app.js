// 最终的根组件

import { h, Component } from 'preact';

import Todo from '../containers/handleTodo';

const App = () => (
  <div id="app">
    <Todo />
  </div>
);

export default App;
