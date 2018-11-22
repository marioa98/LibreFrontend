<template>
  <div id="app">
    <!-- <libre-landing /> -->
    <!-- <libre-login/> -->
    <!-- <libre-singup/> -->
    <libre-user-home />
  </div>
</template>
<script>
  // landing
  import LibreLanding from './pages/Landing.vue'
  import LibreLogin from './pages/Login.vue'
  import LibreSingup from './pages/SingUp.vue'
  // user
  import LibreUserHome from './pages/UserHome.vue'
  export default {
    name: 'app',
    components: {
      LibreLanding,
      LibreLogin,
      LibreSingup,
      LibreUserHome
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>
<style lang="scss">
  @import './scss/main.scss';

</style>
