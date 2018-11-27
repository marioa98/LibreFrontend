<template>
  <div>
    <facultad-form-info v-bind:facultad="facultad" />
  </div>
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
