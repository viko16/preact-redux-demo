// bindActionCreators 可以把 actions 包装成可以直接被调用的函数
import { bindActionCreators } from 'redux';

/**
 * 包装 mapDispatchToProps
 *
 * @param {object} actions
 * @returns {function}
 */
export function bindActions(actions) {
  // 此处觉得这个扩展运算符没意义
  // 因为相当于 return dispatch => bindActionCreators(actions, dispatch);
  // bindActionCreators 的返回值已经是 object 了
  return dispatch => ({
    ...bindActionCreators(actions, dispatch)
  });
}
