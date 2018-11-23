<template>
  <admin-base-layout v-bind:admin="admin">
    <facultad-form-add />
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import FacultadFormAdd from '../components/shared/FacultadFormAdd.vue'

  export default {
    name: 'AdminAdministradorInfo',
    components: {
      AdminBaseLayout,
      FacultadFormAdd
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
