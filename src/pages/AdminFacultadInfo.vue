<template>
  <admin-base-layout v-bind:admin="admin">
    <facultad-form-info v-bind:facultad="facultad" />
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import FacultadFormInfo from '../components/shared/FacultadFormInfo.vue'
  export default {
    name: 'AdminAdministradorInfo',
    components: {
      AdminBaseLayout,
      FacultadFormInfo
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        facultad: {
          id: 1,
          nombre: 'Telematica'
        }
      }
    }
  }

</script>
