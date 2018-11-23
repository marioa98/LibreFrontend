<template>
  <form>
    <input-text v-bind:field="fields[0]" />
    <button class="button">Cancelar</button>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // inputs
  import InputText from '../inputs/InputText.vue'
  export default {
    name: 'FacultadFormAdd',
    components: {
      InputText
    },
    data() {
      return {
        fields: [{
          id: 1,
          ident: 'FacultadName',
          label: 'Nombre',
          name: 'name',
          placeholder: '',
          value: '',
          type: 'text'
        }]
      }
    }
  }

</script>
