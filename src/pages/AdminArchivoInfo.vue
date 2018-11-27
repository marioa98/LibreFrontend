<template>
  <div>
    <archivo-form-info v-bind:archivo="archivo" />
  </div>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import ArchivoFormInfo from '../components/shared/ArchivoFormInfo.vue'

  export default {
    name: 'AdminAdministradorInfo',
    components: {
      AdminBaseLayout,
      ArchivoFormInfo
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        archivo: {
          "id": 1,
          "nombre": "Mujeres",
          "descripcion": "Descripción no disponible",
          "uri": "https://www.gandhi.com.mx/mujeres-12"
        }
      }
    }
  }

</script>
