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
      usuario: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'UsuarioName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: this.usuario.nombre,
            type: 'text'
          },
          {
            id: 2,
            ident: 'UsuarioLastName',
            label: 'Apellidos',
            name: 'lastname',
            placeholder: '',
            value: this.usuario.apellidos,
            type: 'text'
          },
          {
            id: 3,
            ident: 'UsuarioEmail',
            label: 'Email',
            name: 'email',
            placeholder: '',
            value: this.usuario.correo,
            type: 'email'
          }
        ]
      }
    }
  }

</script>
