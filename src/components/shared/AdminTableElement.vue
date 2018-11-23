<template>
  <tr>
    <th>{{ administrador.id }}</th>
    <td>{{ administrador.nombre }}</td>
    <td>{{ administrador.apellidos }}</td>
    <td>{{ administrador.activo }}</td>
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
    name: 'AdminTableElement',
    props: {
      administrador: {
        type: Object,
        required: true
      }
    }
  }

</script>
