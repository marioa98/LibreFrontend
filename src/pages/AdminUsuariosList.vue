<template>
  <admin-base-layout v-bind:admin="admin">
    <admin-table v-bind:headers="headers">
      <usuario-table-element v-for="usuario in usuarios" v-bind:usuario="usuario" v-bind:key="usuario.id" />
    </admin-table>
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import UsuarioTableElement from '../components/shared/UsuarioTableElement.vue'
  export default {
    name: 'AdminUsuariosList',
    components: {
      AdminBaseLayout,
      AdminTable,
      UsuarioTableElement
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        usuarios: [{
          "id": 1,
          "nombre": "Gerardo",
          "apellidos": "Chávez",
          "correo": "gchavez8@ucol.mx",
          "activo": true
        }],
        headers: [{
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
