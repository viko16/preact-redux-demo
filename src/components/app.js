import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import mapStateToProps from '../reducers';
import mapDispatchToProps from '../actions';

import TodoItem from './todo-item';


// @connect(reduce, bindActions(actions))
class App extends Component {
  constructor() {
    super();
    // 设置初始值
    this.state.text = '';
  }

  addTodos = () => {
    let { text } = this.state;
    if (text.trim()) {
      this.setState({ text:'' });
      this.props.addTodo(text);
    }
    return false;
  };

  removeTodo = (todo) => {
    this.props.removeTodo(todo);
  };

  render({ todos }, { text }) {
    return (
      <div id="app">
        <form onSubmit={this.addTodos} action="javascript:">
          <input value={text} onInput={this.linkState('text')} placeholder="New ToDo..." />
        </form>
        <ul>
          { todos.map( todo => (
            <TodoItem key={todo.id} todo={todo} onRemove={this.removeTodo} />
          )) }
        </ul>
      </div>
    );
  }
}

/**
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 *
 * 不会修改原组件，而是会返回一个新的组件类
 * @prop mapStateToProps 负责将 state 映射到组件的 props
 * @prop mapDispatchToProps 负责将操作映射成 action
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
