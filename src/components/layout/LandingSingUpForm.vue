<template>
  <div class="column box">
    <a class="button is-medium is-fullwidth">Iniciar Sesión</a>
    <hr>
    <div class="box">
      <form>
        <!-- nombre -->
        <input-text v-bind:field="fields[0]" />
        <!-- apellidos -->
        <input-text v-bind:field="fields[1]" />
        <!-- correo -->
        <input-text v-bind:field="fields[2]" />
        <!-- password -->
        <input-text v-bind:field="fields[3]" />
        <!-- facultad -->
        <input-text v-bind:field="fields[4]" />

        <button class="button is-medium is-fullwidth">Crear una cuenta</button>
      </form>
    </div>
  </div>
</template>
<script>
  import InputText from '../inputs/InputText.vue';
  export default {
    name: 'LandingSingUp',
    components: {
      InputText
    },
    data() {
      return {
        fields: [{
            id: 1,
            ident: 'UsuarioName',
            label: 'Nombre',
            name: 'name',
            placeholder: '',
            value: '',
            type: 'text'
          },
          {
            id: 2,
            ident: 'UsuarioLastName',
            label: 'Apellidos',
            name: 'lastname',
            placeholder: '',
            value: '',
            type: 'text'
          },
          {
            id: 3,
            ident: 'UsuarioEmail',
            label: 'Email',
            name: 'email',
            placeholder: '',
            value: '',
            type: 'email'
          },
          {
            id: 4,
            ident: 'UsuarioPassword',
            label: 'Password',
            name: 'password',
            placeholder: '',
            value: '',
            type: 'password'
          },
          {
            id: 5,
            ident: 'UsuarioFacultad',
            label: 'Facultad',
            name: 'facultad',
            placeholder: '',
            value: '',
            type: 'text'
          }
        ]
      }
    }
  }

</script>
