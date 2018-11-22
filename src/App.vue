<template>
  <div id="app">
    <!-- <libre-landing /> -->
    <!-- <libre-login/> -->
    <!-- <libre-singup/> -->
    <!-- <libre-user-home /> -->
    <!-- <libre-admin-home /> -->
    <libre-admin-archivo-list />
  </div>
</template>
<script>
  // landing
  import LibreLanding from './pages/Landing.vue'
  import LibreLogin from './pages/Login.vue'
  import LibreSingup from './pages/SingUp.vue'
  // user
  import LibreUserHome from './pages/UserHome.vue'
  // admin
  import LibreAdminHome from './pages/AdminHome.vue'
  import libreAdminArchivoList from './pages/AdminArchivoList'
  export default {
    name: 'app',
    components: {
      LibreLanding,
      LibreLogin,
      LibreSingup,
      LibreUserHome,
      LibreAdminHome,
      libreAdminArchivoList
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
