<template>
  <div>
    <admin-table v-bind:headers="headers">
      <archivo-table-element v-for="a in archivos" v-bind:archivo="a" v-bind:key="a.id" />
    </admin-table>
  </div>
</template>
<script>
  //services
  import archivoService from '../services/archivo'
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import ArchivoTableElement from '../components/shared/ArchivoTableElement.vue'

  export default {
    name: 'AdminArchivoList',
    components: {
      AdminBaseLayout,
      AdminTable,
      ArchivoTableElement
    },
    created() {
      archivoService.obtenerTodos().then(res => {
        this.archivos = res
      })
    },
    data() {
      return {
        archivos: [],
        headers: [{
            id: 1,
            name: '#'
          },
          {
            id: 2,
            name: 'Nombre'
          },
          {
            id: 3,
            name: 'Estado'
          }, {
            id: 4,
            name: 'Tipo'
          },
          {
            id: 5,
            name: 'Acción'
          }
        ],
      }
    }
  }

</script>
