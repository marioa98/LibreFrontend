<template>
  <div id="app">
    <!-- <libre-landing /> -->
    <libre-login/>
  </div>
</template>
<script>
  import LibreLanding from './pages/Landing.vue';
  import LibreLogin from './pages/Login.vue';
  export default {
    name: 'app',
    components: {
      LibreLanding,
      LibreLogin
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
