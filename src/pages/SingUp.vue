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
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </div>
                <p> {{ facultad }} </p>
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
  import facultadService from '../services/facultad'

  export default {
    name: 'Login',
    data() {
      return {
        nombre: '',
        apellidos: '',
        correo: '',
        activo: true,
        password: '',
        facultad: '',
        facultades: []
      }
    },
    mounted () {

    }
  }

</script>
<style>

</style>
