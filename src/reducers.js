/**
 * [mapStateToProps(state, [ownProps]): stateProps] (Function)
 *
 * 解释：
 * mapStateToProps 是一个函数，将 redux state 对象映射到 UI 组件的 props
 *
 * @prop state 是当前的 state 对象
 * @prop ownProps 是当前组件的 props 对象
 * @returns 返回 stateProps 类型的对象
 *
 * 组件会自动监听 redux store 的更新
 * 无论是 state / ownProps 有变化时 mapStateToProps 都会被触发
 * 返回值只能是简单对象，会自动合并到组件的 props
 *
 */
const EMPTY = {};

// A. 返回整个 state
export default (store) => {
  return store || EMPTY;
};


// B. 利用 ownProps 过滤返回结果的写法
function mapStateToProps (state, ownProps) {
  // 不一定要返回整个 state 的，组件上需要哪个才返回哪个
  return {
    lists: state.lists,
    filteredLists: state.lists.filter(item => item === ownProps.currId)
  };
}
