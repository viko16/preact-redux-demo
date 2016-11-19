import { h, Component } from 'preact';

class TodoItem extends Component {
  shouldComponentUpdate({ todo, onRemove }) {
    return todo !== this.props.todo || onRemove !== this.props.onRemove;
  }

  render({ todo, onRemove }) {
    return (
      <li>
        <button onClick={() => onRemove(todo)}>&times;</button>
        {' ' + todo.text}
      </li>
    );
  }
}

export default TodoItem;
