<template>
  <div>
    <admin-table v-bind:headers="headers">
      <facultad-table-element v-for="facultad in facultades" v-bind:facultad="facultad" v-bind:key="facultad.id" />
    </admin-table>
  </div>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import FacultadTableElement from '../components/shared/FacultadTableElement.vue'

  export default {
    name: 'AdminFacultadList',
    components: {
      AdminBaseLayout,
      AdminTable,
      FacultadTableElement
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        facultades: [{
          "id": 1,
          "nombre": "telemática",
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
