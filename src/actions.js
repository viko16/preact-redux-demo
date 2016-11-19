// Action Creator

let nextId = 1;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextId++,
    text
  };
}

export function removeTodo(selectedItem) {
  return {
    type: 'REMOVE_TODO',
    selectedItem
  };
}
