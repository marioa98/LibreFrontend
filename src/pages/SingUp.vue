<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6 is-offset-3">
            <h3 class="title has-text-centered">Unirse a LIBRE</h3>
            <p class="subtitle has-text-centered">Cree una cuenta personal</p>
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
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import InputText from '../components/inputs/InputText.vue';
  export default {
    name: 'Login',
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
<style>

</style>
