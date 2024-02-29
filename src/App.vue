<template>
  <div id="app">
    <!-- store test -->
    <div>
      <div>{{ this.userId }}</div>
      <button @click="login()">Login as Nick</button>
      <button @click="logout()">Logout</button>
    </div>
    <div>
          <todos></todos>
          <todos></todos>
          <todos></todos>

        </div>
    <!-- <button type='button' @click="setSuperTest">test</button> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Todos from './components/Todos'
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'
import { mapState } from 'vuex'

export default {
  name: 'App',
  created() {
    console.log('App.vue')
    console.log(this.$store)
    window.Vue = this //window.Vue.$store.commit('ADD_TODO', 'Salut les gens') --> en console
  },
  data() {
    return {
      slides: 5,
      todos: [{
        name: 'Demo',
        completed: true,
        id: 3
      }]
    }
  },
  // store test
  computed: mapState({
    userId: state => state.account.userId
  }),
  methods: {
    addTodo() {
      this.todos.push({
        name: 'Jean',
        completed: false
      })
    },
    addSlide() {
      this.slides++
    },
    removeSlide() {
      this.slides--
    },
    setSuperTest() {
      console.log('jesaispas')
      this.$store.dispatch('setTest', 'je ne sais pas')
    },
    // store test
    login() {
      this.$store.commit('login', 'Nick')
    },
    logout() {
      this.$store.commit('logout')
    }
  },
  components: {
    Todos,
    Carousel,
    CarouselSlide,
  }
}
</script>