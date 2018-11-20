<template>
  <div id="app">
    <libre-landing />
  </div>
</template>
<script>
  import LibreLanding from './pages/Landing.vue';
  export default {
    name: 'app',
    components: {
      LibreLanding
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
