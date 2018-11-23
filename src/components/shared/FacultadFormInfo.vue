<template>
  <form>
    <input-text v-bind:field="fields[0]" />
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
      facultad: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'FacultadName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: this.facultad.nombre,
            type: 'text'
          }
        ]
      }
    }
  }

</script>
