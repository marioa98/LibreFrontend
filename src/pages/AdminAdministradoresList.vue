<template>
  <div>
    <admin-table v-bind:headers="headers">
      <admin-table-element v-for="a in administradores" v-bind:administrador="a" v-bind:key="a.id" />
    </admin-table>
  </div>
</template>
<script>
  //services
  import administradorService from '../services/administrador'
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
    created() {
      administradorService.obtenerTodos().then(res => {
        this.administradores = res
      })
    },
    data() {
      return {
        administradores: [],
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
