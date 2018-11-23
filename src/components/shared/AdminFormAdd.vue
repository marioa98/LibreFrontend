<template>
  <form>
    <input-text v-bind:field="fields[0]" />
    <input-text v-bind:field="fields[1]" />
    <input-text v-bind:field="fields[2]" />
    <button class="button">Cancelar</button>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // inputs
  import InputText from '../inputs/InputText.vue'
  export default {
    name: 'AdminFormAdd',
    components: {
      InputText
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'AdminName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: '',
            type: 'text'
          },
          {
            id: 2,
            ident: 'AdminLastName',
            label: 'Apellidos',
            name: 'lastname',
            placeholder: '',
            value: '',
            type: 'text'
          },
          {
            id: 3,
            ident: 'AdminEmail',
            label: 'Email',
            name: 'email',
            placeholder: '',
            value: '',
            type: 'email'
          }
        ]
      }
    }
  }

</script>
