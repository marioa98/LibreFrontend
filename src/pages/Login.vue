<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">Iniciar Sesión</h3>
          <p class="subtitle">Inicie sesión para poder continuar</p>
          <div class="box">
            <form>
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
              <a class="button is-fullwidth" v-on:click="submitToNormalUser">Entrar</a>
              <a class="button is-fullwidth" v-on:click="submitToAdmin">Entrar como administrador</a>
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
  import administradorService from '../services/administrador'

  export default {
    name: 'Login',
    methods: {
      submitToNormalUser: function () {
        usuarioService.login({
          correo: this.correo,
          password: this.password
        }).then(res => {
          this.persona = res
          if (this.persona.id) {
            this.goToHomeUser(this.persona.id)
          }
        })
      },
      submitToAdmin: function () {
        administradorService.login({
          correo: this.correo,
          password: this.password
        }).then(res => {
          this.persona = res
          if (this.persona.id) {
            this.goToHomeAdmin(this.persona.id)
          }
        })
      },
      goToHomeAdmin: function (id) {
        this.$router.push({
          name: 'adminHome',
          params: {
            id
          }
        })
      },
      goToHomeUser: function (id) {
        this.$router.push({
          name: 'usuarioHome',
          params: {
            id
          }
        })
      }
    },
    data() {
      return {
        correo: '',
        password: '',
        persona: {}
      }
    }
  }

</script>
<style scoped>
  button {
    margin-top: 10px;
  }

</style>
