<template>
  <div id="app">
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
  },
  components: {
    Todos,
    Carousel,
    CarouselSlide,
  }
}
</script>