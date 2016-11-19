/**
 * Reducer 必须是纯函数
 *
 * 只要传入参数相同，返回计算得到的下一个 state 就一定相同。
 * 没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。
 */

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodoItem = {
        text: action.text,
        id: action.id
      };
      return Object.assign({}, state, {
        todos: state.todos.concat([newTodoItem])
      });
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(i => i !== action.selectedItem)
      });
    default:
      return state;
  }
};
