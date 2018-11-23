<template>
  <div id="app">
    <!-- <libre-landing /> -->
    <!-- <libre-login/> -->
    <!-- <libre-singup/> -->
    <!-- <libre-user-home /> -->
    <!-- <libre-admin-home /> -->
    <!-- <libre-admin-archivo-list /> -->
    <!-- <libre-administradores-list /> -->
    <!-- <libre-usuarios-list /> -->
    <!-- <libre-facultades-list /> -->
    <!-- <libre-administrador-info /> -->
    <!-- <libre-archivo-info /> -->
    <!-- <libre-facultad-info /> -->
    <libre-usuario-info />
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
  import LibreUsuariosList from './pages/AdminUsuariosList.vue'
  import LibreFacultadesList from './pages/AdminFacultadesList.vue'
  import LibreAdministradorInfo from './pages/AdminAdministradorInfo.vue'
  import LibreArchivoInfo from './pages/AdminArchivoInfo.vue'
  import LibreFacultadInfo from './pages/AdminFacultadInfo.vue'
  import LibreUsuarioInfo from './pages/AdminUsuarioInfo.vue'

  export default {
    name: 'app',
    components: {
      LibreLanding,
      LibreLogin,
      LibreSingup,
      LibreUserHome,
      LibreAdminHome,
      libreAdminArchivoList,
      LibreAdministradoresList,
      LibreUsuariosList,
      LibreFacultadesList,
      LibreAdministradorInfo,
      LibreArchivoInfo,
      LibreFacultadInfo,
      LibreUsuarioInfo
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
