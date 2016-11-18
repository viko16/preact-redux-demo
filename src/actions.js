/**
 * [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)
 *
 * 解释：
 * mapDispatchToProps 可以是一个函数，也可以是一个对象
 *
 * @param dispatch 由 Store 提供的 dispatch
 * @returns {function | object}
 *
 * 在 ownProps 变化的时候，mapDispatchToProps 就会被触发
 * 同样的也会自动合并到组件的 props
 * 组件上需要哪个 action 的时候就才返回哪个
 */

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

export function removeTodo(todo) {
  return {
    type: 'REMOVE_TODO',
    todo
  };
}

// A. 工具函数封装
import { bindActions } from './util';

export default bindActions({
  addTodo,
  removeTodo
});


// B. 如果不用 util 方法，也可以这样写：
/**
 * bindActionCreators 由 redux 提供，可以把 actions 包装成可以直接被调用的函数
 *
 * bindActionCreators(actionCreators, dispatch): object
 * @prop {object} 将 action creators 转成拥有同名 keys 的对象
 * @prop {function} 由 Store 实例提供的 dispatch 函数
 * @returns {object} 跟原对象结构类似的对象，只不过里面的每个函数都可以直接调用了
 */
import { bindActionCreators } from 'redux';

function mapDispatchToProps (dispatch, ownProps) {
  return bindActionCreators({
    addTodo,
    removeTodo
  }, dispatch);
};

// C. 不使用 bindActionCreators 的写法（其实跟 bindActionCreators 的实现一样）：
function mapDispatchToProps2 (dispatch, ownProps) {
  return {
    // 普通工厂函数写法：
    addTodo: text => dispatch(addTodo(text)),
    // 或者不知道多少个参数的时候用 rest parameters 写法：
    removeTodo: (...args) => dispatch(removeTodo(...args))
  };
}

// D. 直接返回 object 的写法：
// 是的没错，mapDispatchToProps 可以直接返回 object 的
// key 是对应 UI 组件的同名 prop
// value 是 Action creator，redux 会自动 dispatch 的，好方便
const mapDispatchToProps3 = {
  addTodo,
  removeTodo
};
