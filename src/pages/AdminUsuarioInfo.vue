<template>
  <admin-base-layout v-bind:admin="admin">
    <usuario-form-info v-bind:usuario="usuario"/>
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import UsuarioFormInfo from '../components/shared/UsuarioFormInfo.vue'

  export default {
    name: 'AdminUsuarioInfo',
    components: {
      AdminBaseLayout,
      UsuarioFormInfo
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        usuario: {
            nombre: 'Gerardo',
            apellidos: 'Larios',
            correo: 'gchavez8@email.com'
        }
      }
    }
  }

</script>
