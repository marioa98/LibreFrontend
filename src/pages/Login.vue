<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">Iniciar Sesión</h3>
          <p class="subtitle">Inicie sesión para poder continuar</p>
          <div class="box">
            <form>
              <!-- correo -->
              <input-text v-bind:field="fields[0]"/>
              <!-- contraseña -->
              <input-text v-bind:field="fields[1]"/>

              <button class="button is-fullwidth">Entrar</button>
              <button class="button is-fullwidth">Entrar como administrador</button>
            </form>
          </div>
          <p>
            <a href="../">Registrarse</a> &nbsp;·&nbsp;
            <a href="../">¿Olvidaste tu contraseña?</a> &nbsp;·&nbsp;
            <a href="../">Ayuda</a>
          </p>
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
            ident: 'UsuarioEmail',
            label: 'Email',
            name: 'email',
            placeholder: '',
            value: '',
            type: 'email'
          },
          {
            id: 2,
            ident: 'UsuarioPassword',
            label: 'Password',
            name: 'password',
            placeholder: '',
            value: '',
            type: 'password'
          }
        ]
      }
    }
  }

</script>
<style scoped>
  button {
    margin-top: 10px;
  }

</style>
