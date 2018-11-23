<template>
  <form>
    <input-text v-bind:field="fields[0]" />
    <input-text v-bind:field="fields[1]" />
    <input-text v-bind:field="fields[2]" />
    <button class="button">Regresar</button>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // inputs
  import InputText from '../inputs/InputText.vue'

  export default {
    name: 'AdminFormInfo',
    components: {
      InputText
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'ArchivoName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: '',
            type: 'text'
          },
          {
            id: 2,
            ident: 'ArchivoDescription',
            label: 'Descripcion',
            name: 'description',
            placeholder: '',
            value: '',
            type: 'text'
          },
          {
            id: 3,
            ident: 'ArchivoUrl',
            label: 'URL',
            name: 'url',
            placeholder: '',
            value: '',
            type: 'url'
          }
        ]
      }
    }
  }

</script>
