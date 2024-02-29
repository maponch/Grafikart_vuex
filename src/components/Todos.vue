<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une tache" v-model="newTodo"
        @keyup.enter="addTodo(newTodo)">
    </header>
    <div class="main">
      <!-- <h1>{{$store.getters.test}}</h1> -->
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos"
          :class="{ 'completed': todo.completed, 'editing': todo === editing }">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @blur="doneEdit"
            @keyup.esc="cancelEdit" v-focus="todo === editing">
        </li>
      </ul>

    </div>
    <footer class="footer" v-show="hasTodos">
      <span class="todo-count"><strong>{{ remainingTodosCount }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{ selected: filter === 'all' }" @click.prevent="filter = 'all'">Tout les taches</a></li>
        <li><a href="#" :class="{ selected: filter === 'todo' }" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{ selected: filter === 'done' }" @click.prevent="filter = 'done'">faites</a></li>
      </ul>
      <button class="clear-completed" v-show="completedTodosCount" @click.prevent="deleteTodoStore">Supprimer les tâches
        finies</button>
    </footer>
  </section>
</template>

<script>
import Vuex from 'vuex'
global.v = Vuex
export default {
  props: {
    value: { type: Array, default() { return [] } }
  },
  created() { console.log('todo') },
  data() {
    return {
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: ''

    }
  },
  watch: {
    value(value) {
      this.todos = value
    }
  },
  methods: {
    ...Vuex.mapActions({
      addTodoStore: 'addTodo',
      deleteTodoStore: 'deleteTodo'
    }),
    addTodo() {
      this.addTodoStore(this.newTodo)
      this.newTodo = ''
    },
    deleteTodo(todo){
      this.deletTodoStorage(todo)
    },
    deleteCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.$emit('input', this.todos)
    },
    editTodo(todo) {
      this.editing = todo
      this.oldTodo = todo.name
    },
    doneEdit() {
      this.editing = null
      console.log('test')
    },
    cancelEdit() {
      this.editing.name = this.oldTodo
      this.doneEdit()
    },
    generateId() {
      let randomId = Math.random().toString().slice(2, 6);
      return randomId;
    },
  },
  computed: {
    ...Vuex.mapGetters([
      'todos',
      'remainingTodosCount',
      'completedTodosCount',
      'remainingTodos',
      'completedTodos',
    ]),
    test() {
      return this.$store.getters.todos
    },
    filteredTodos() {
      if (this.filter === 'todo') {
        return this.remainingTodos
      } else if (this.filter === 'done') {
        return this.completedTodos
      }
      return this.todos
    },
    allDone: {
      get() {
        return this.remaining === 0
      },
      set(value) {
        this.todos.forEach(todo => {
          todo.completed = value
        })
      }
    },
    hasTodos() {
      return this.todos.length > 0
    },

  },
  directives: {
    focus(el, value) {
      if (value) {
        this.$nextTick(_ => {
          el.focus()
        })
      }
    }
  }
}
</script>

<style src="./todos.css"></style>