<template>
  <div id="app">
    <!-- <libre-landing /> -->
    <!-- <libre-login/> -->
    <!-- <libre-singup/> -->
    <!-- <libre-user-home /> -->
    <!-- <libre-admin-home /> -->
    <!-- <libre-admin-archivo-list /> -->
    <libre-administradores-list />
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
  import libreAdminArchivoList from './pages/AdminArchivoList.vue'
  import LibreAdministradoresList from './pages/AdminAdministradoresList.vue'
  
  export default {
    name: 'app',
    components: {
      LibreLanding,
      LibreLogin,
      LibreSingup,
      LibreUserHome,
      LibreAdminHome,
      libreAdminArchivoList,
      LibreAdministradoresList
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
