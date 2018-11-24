<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">Iniciar Sesión</h3>
          <p class="subtitle">Inicie sesión para poder continuar</p>
          <div class="box">
            <form v-on:submit.prevent="submit">
              <div class="field">
                <label for="UsuarioEmail">Email</label>
                <div class="control">
                  <input class="input" type="email" name="email" id="UsuarioEmail" placeholder="e.j. alexsmith@gmail.com"
                    v-model="correo">
                </div>
              </div>
              <div class="field">
                <label for="UsuarioPassword">Password</label>
                <div class="control">
                  <input class="input" type="password" name="password" id="UsuarioPassword" placeholder="contraseña"
                    v-model="password">
                </div>
              </div>
              <button class="button is-fullwidth">Entrar</button>
              <button class="button is-fullwidth">Entrar como administrador</button>
            </form>
          </div>
          <p>
            <router-link to="/singup">Registrarse</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import usuarioService from '../services/usuario'

  export default {
    name: 'Login',
    methods: {
      submit: function () {
        usuarioService.login({
          correo: this.correo,
          password: this.password
        }).then(res => {
          this.persona = res
        })
      }
    },
    data() {
      return {
        correo: '',
        password: '',
        persona: {},
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
