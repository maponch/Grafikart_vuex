import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

console.log('index.js')

const state = () => ({
  todos: [{
    name: 'Notre première tâche',
    completed: true
  }],
  test: 'text de test'
})
const getters = {
  todos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  remainingTodos: state => state.todos.filter(todo => !todo.completed),
  remainingTodosCount: state => getters.remainingTodos(state).length,
  completedTodosCount: state => getters.completedTodos(state).length,
}
const mutations = {
  ADD_TODO: (state, name) => {
    if (name !== ''){state.todos.push({
      name: name,
      completed: false
    })}
  },
  DELETE_TODO: (state, todo) => {
    state.todos.splice(i => i !== todo)
    
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
  // store test
  modules:{
    account,
    },
  plugins: [createPersistedState()]
})

// global.store = store 
export default store