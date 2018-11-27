<template>
  <div>
    <admin-table v-bind:headers="headers">
      <autor-table-element v-for="autor in autores" v-bind:autor="autor" v-bind:key="autor.id" />
    </admin-table>
  </div>
</template>
<script>
  //services
  import autorService from '../services/autor'
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  //shared
  import AdminTable from '../components/shared/Table.vue'
  import AutorTableElement from '../components/shared/AutorTableElement.vue'

  export default {
    name: 'AdminAutorList',
    components: {
      AdminBaseLayout,
      AdminTable,
      AutorTableElement
    },
    created() {
      autorService.obtenerTodos().then(res => {
        this.autores = res
      })
    },
    data() {
      return {
        autores: [],
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
            name: 'accion'
          }
        ]
      }
    }
  }

</script>
