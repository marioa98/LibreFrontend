<template>
  <admin-base-layout v-bind:admin="admin">
    <admin-table v-bind:headers="headers">
      <autor-table-element v-for="autor in autores" v-bind:autor="autor" v-bind:key="autor.id" />
    </admin-table>
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import AutorTableElement from '../components/shared/AutorTableElement.vue'

  export default {
    name: 'AdminArchivoList',
    components: {
      AdminBaseLayout,
      AdminTable,
      AutorTableElement
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        autores: [{
          "id": 1,
          "nombre": "Borges",
          "createdAt": "2018-11-19T19:21:09.769+0000",
          "updatedAt": "2018-11-19T19:21:09.769+0000"
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
            id: 2,
            name: 'accion'
          }
        ]
      }
    }
  }

</script>
