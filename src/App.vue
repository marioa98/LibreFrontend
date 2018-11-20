<template>
  <div id="app">
    <libre-navbar />
    <libre-header/>
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> -->
    <loader />
    <!-- <libre-footer /> -->
  </div>
</template>

<script>
// layout components
import LibreHeader from './components/layout/Header.vue'
import LibreFooter from './components/layout/Footer.vue'
import LibreNavbar from './components/layout/Navbar.vue'
// shared components
import Loader from './components/shared/Loader.vue'

export default {
  name: 'app',
  components:{
    Loader,
    LibreFooter,
    LibreHeader,
    LibreNavbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
