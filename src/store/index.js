import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

console.log('index.js')
const state = () => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  test: '',
  nbr: 0,
  obj: {},
  arr: []
})
const getters = {
  todos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  remainingTodos: state => state.todos.filter(todo => !todo.completed),
  remainingTodosCount: state => getters.remainingTodos(state).length,
  completedTodosCount: state => getters.completedTodos(state).length,
}
const mutations = {
  ADD_TODO(state, name) {
    // state.todos.push()
    // JSON.stringify(this.todo)
    // localStorage.setItem('todo', curieux)

    const newTodos = [...state.todos, {
      name: name,
      completed: false
    }]
    localStorage.setItem('todos', JSON.stringify(newTodos))
    state.todos = newTodos
  },
  DELETE_TODO(state, todo) {
    const arr = [...state.todos]
    const index = arr.indexOf(todo);
    delete arr[index]
    const newArr = arr.filter((e) => e)

    localStorage.setItem('todos', JSON.stringify(newArr))
    state.todos = newArr
  }
}
const actions = {
  addTodo: (store, name) => {
    store.commit('ADD_TODO', name)
  },
  deleteTodo: (store, todo) => {
    store.commit('DELETE_TODO', todo)
  }
}
const store = new Vuex.Store({

  state: state,

  getters: getters,

  mutations: mutations,

  actions: actions,
})

// global.store = store 
export default store