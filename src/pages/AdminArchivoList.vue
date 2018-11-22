<template>
  <div>
    
  </div>
</template>
<script>
  import AdminNavbar from '../components/layout/AdminNavbar.vue'
  import AdminHeader from '../components/layout/AdminHeader.vue'
  import AdminMenu from '../components/layout/AdminMenu.vue'

  export default {
    name: 'AdminArchivoList',
    components: {
      AdminNavbar,
      AdminHeader,
      AdminMenu
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        }
      }
    }
  }

</script>
<style scoped>

</style>
