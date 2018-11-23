<template>
  <form>
    <input-text v-bind:field="fields[0]" />
    <input-text v-bind:field="fields[1]" />
    <input-text v-bind:field="fields[2]" />
    <button class="button">Regresar</button>
    <button class="button">Eliminar</button>
    <button class="button">Guardar</button>
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
    props: {
      archivo: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'ArchivoName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: this.archivo.nombre,
            type: 'text'
          },
          {
            id: 2,
            ident: 'ArchivoDescription',
            label: 'Descripcion',
            name: 'description',
            placeholder: '',
            value: this.archivo.descripcion,
            type: 'text'
          },
          {
            id: 3,
            ident: 'ArchivoUrl',
            label: 'URL',
            name: 'url',
            placeholder: '',
            value: this.archivo.uri,
            type: 'url'
          }
        ]
      }
    }
  }

</script>
