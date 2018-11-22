<template>
    <table>
        <tr>
            <th v-for="h in headers" v-bind:key="h.id">
                {{ h.name }}
            </th>
        </tr>
        <slot name="table-data">
        </slot>
    </table>
</template>

<script>
export default {
    name: 'LibreTable',
    props: {
        headers: {
            type: Object,
            required: true
        }
    }
}
</script>
