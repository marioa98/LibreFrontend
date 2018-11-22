<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th v-for="h in headers" v-bind:key="h.id">
          {{ h.name }}
        </th>
      </tr>
    </thead>
    <tbody>
        <slot></slot>
    </tbody>
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
