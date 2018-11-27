<template>
  <div>
    <admin-form-info v-bind:administrador="administrador" />
  </div>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import AdminFormInfo from '../components/shared/AdminFormInfo.vue'

  export default {
    name: 'AdminAdministradorInfo',
    components: {
      AdminBaseLayout,
      AdminFormInfo
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        administrador: {
          nombre: 'Gerardo',
          apellidos: 'Larios',
          correo: 'gchavez8@email.com'
        }
      }
    }
  }

</script>
