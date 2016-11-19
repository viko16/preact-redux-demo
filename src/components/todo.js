/**
 * UI 组件
 * 只负责 UI 呈现，不应该带有逻辑
 *
 * 1. 没有状态
 * 2. 所有数据来自 this.props
 * 3. 不使用任何 Redux API
 */

import { h, Component } from 'preact';

import TodoItem from './todo-item';

class Todo extends Component {
  addAndClear = () => {
    let { text } = this.state;
    this.setState({ text:'' });
    this.props.addTodo(text);
    return false;
  };

  render({ todos, addTodo, removeTodo }, { text = '' }) {
    return (
        <div id="app">
          <form onSubmit={this.addAndClear} action="javascript:">
            <input value={text} onInput={this.linkState('text')} placeholder="New Todo..." />
          </form>
          <ul>
            { todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
            )) }
          </ul>
        </div>
    );
  }
}

export default Todo;
