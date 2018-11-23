<template>
  <form>
    <input-text v-bind:field="fields[0]" />
    <input-text v-bind:field="fields[1]" />
    <input-text v-bind:field="fields[2]" />
    <button class="button">Regresar</button>
    <button class="button">Eliminar</button>
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
      administrador: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'AdminName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: this.administrador.nombre,
            type: 'text'
          },
          {
            id: 2,
            ident: 'AdminLastName',
            label: 'Apellidos',
            name: 'lastname',
            placeholder: '',
            value: this.administrador.apellidos,
            type: 'text'
          },
          {
            id: 3,
            ident: 'AdminEmail',
            label: 'Email',
            name: 'email',
            placeholder: '',
            value: this.administrador.correo,
            type: 'email'
          }
        ]
      }
    }
  }

</script>
