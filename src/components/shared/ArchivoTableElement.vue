<template>
    <tr>
      <th>{{ archivo.id }}</th>
      <td>{{ archivo.nombre }}</td>
      <td>{{ archivo.activo }}</td>
      <td>{{ archivo.tipos.tipo }}</td>
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
    name: 'ArchivoTableElement',
    props: {
      archivo: {
        type: Object,
        required: true
      }
    }
  }

</script>
