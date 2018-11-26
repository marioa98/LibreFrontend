<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6 is-offset-3">
            <h3 class="title has-text-centered">Unirse a LIBRE</h3>
            <p class="subtitle has-text-centered">Cree una cuenta personal</p>
            <div class="box">
              <form v-on:submit.prevent="submit">
                <div class="field">
                  <label for="UsuarioName">Nombre</label>
                  <div class="control">
                    <input class="input" type="text" name="name" id="UsuarioName" placeholder="Ingrese su nombre"
                      v-model="nombre">
                  </div>
                </div>
                <div class="field">
                  <label for="UsuarioLastName">Apellidos</label>
                  <div class="control">
                    <input class="input" type="text" name="lastname" id="UsuarioLastName" placeholder="Ingrese su apellido"
                      v-model="apellidos">
                  </div>
                </div>
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
                    <input class="input" type="password" name="password" id="UsuarioPassword" v-model="password">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Facultad</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="facultad">
                        <option v-for="f in facultades" v-bind:value="f.nombre" v-bind:key="f.id"> {{ f.nombre }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
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
  import facultadService from '../services/facultad'
  import usuarioService from '../services/usuario'

  export default {
    name: 'Login',
    methods: {
      submit: function () {
        usuarioService.agregar({
          nombre: this.nombre,
          apellidos: this.apellidos,
          correo: this.correo,
          activo: this.activo,
          password: this.password,
          facultad: this.facultad
        }).then(
          res => {
            this.usuario = res.data
          }
        )
      },
      goToHome: function () {
        
      }
    },
    data() {
      return {
        nombre: '',
        apellidos: '',
        correo: '',
        activo: true,
        password: '',
        facultad: '',
        usuario: {},
        facultades: [],
      }
    },
    mounted() {
      facultadService.obtenerTodos().then(res => {
        this.facultades = res
      })
    }
  }

</script>
<style>

</style>
