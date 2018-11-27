<template>
  <div>
    <admin-table v-bind:headers="headers">
      <usuario-table-element v-for="usuario in usuarios" v-bind:usuario="usuario" v-bind:key="usuario.id" />
    </admin-table>
  </div>
</template>
<script>
  //services
  import usuarioService from '../services/usuario'
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
    created() {
      usuarioService.obtenerTodos().then(res => {
        this.usuarios = res
      })
    },
    data() {
      return {
        usuarios: [],
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
