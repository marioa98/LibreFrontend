<template>
  <tr>
    <th>{{ autor.id }}</th>
    <td>{{ autor.nombre }}</td>
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
    name: 'AutorTableElement',
    props: {
      autor: {
        type: Object,
        required: true
      }
    }
  }

</script>
