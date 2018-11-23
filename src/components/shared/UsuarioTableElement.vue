<template>
  <tr>
    <th>{{ usuario.id }}</th>
    <td>{{ usuario.nombre }}</td>
    <td>{{ usuario.apellidos }}</td>
    <td>{{ usuario.activo }}</td>
    <td>
      <button>
        ver
      </button>
      <button>
        eliminar
      </button>
    </td>
  </tr>
</template>
<script>
  export default {
    name: 'UsuarioTableElement',
    props: {
      usuario: {
        type: Object,
        required: true
      }
    }
  }

</script>
