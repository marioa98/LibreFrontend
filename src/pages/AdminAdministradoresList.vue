<template>
  <admin-base-layout v-bind:admin="admin">
    <admin-table v-bind:headers="headers">
      <admin-table-element v-for="admin in administradores" v-bind:administrador="admin" v-bind:key="admin.id" />
    </admin-table>
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import AdminTableElement from '../components/shared/AdminTableElement.vue'

  export default {
    name: 'AdminArchivoList',
    components: {
      AdminBaseLayout,
      AdminTable,
      AdminTableElement
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        administradores: [{
          "id": 1,
          "nombre": "Gerardo",
          "apellidos": "Chávez",
          "correo": "gchavez8@ucol.mx",
          "activo": true
        }],
        headers: [
          {
            id: 1,
            name: 'id'
          },
          {
            id: 2,
            name: 'nombre'
          },
          {
            id: 3,
            name: 'apellidos'
          },
          {
            id: 4,
            name: 'estado'
          },
          {
            id: 5,
            name: 'Accion'
          }
        ]
      }
    }
  }

</script>
