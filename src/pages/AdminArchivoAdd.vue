<template>
  <admin-base-layout v-bind:admin="admin">
    <archivo-form-add />
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import ArchivoFormAdd from '../components/shared/ArchivoFormAdd.vue'

  export default {
    name: 'AdminAdministradorInfo',
    components: {
      AdminBaseLayout,
      ArchivoFormAdd
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
