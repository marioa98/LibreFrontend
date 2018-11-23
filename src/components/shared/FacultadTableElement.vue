<template>
  <tr>
    <th>{{ facultad.id }}</th>
    <td>{{ facultad.nombre }}</td>
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
    name: 'FacultadTableElement',
    props: {
      facultad: {
        type: Object,
        required: true
      }
    }
  }

</script>
