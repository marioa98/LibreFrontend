<template>
    <tr>
        <td>archivo.id</td>
        <td>archivo.nombre</td>
        <td>archivo.activo</td>
        <td>archivo.tipo[0].tipo</td>
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
