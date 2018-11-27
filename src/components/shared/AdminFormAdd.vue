<template>
  <form v-on:submit.prevent="submit">
    <div class="field">
      <label class="label" for="AdminName">Nombre</label>
      <div class="control">
        <input class="input" type="text" name="name" id="AdminName" placeholder="Ingresa el nombre" v-model="nombre">
      </div>
    </div>
    <div class="field">
      <label class="label" for="AdminLastname">Email</label>
      <div class="control">
        <input class="input" type="text" name="lastname" id="AdminLastname" placeholder="Ingresa el apellido" v-model="apellidos">
      </div>
    </div>
    <div class="field">
      <label class="label" for="AdminEmail">Email</label>
      <div class="control">
        <input class="input" type="email" name="email" id="AdminEmail" placeholder="e.j. alexsmith@gmail.com" v-model="correo">
      </div>
    </div>
    <div class="field">
      <label class="label" for="AdminPassword">Password</label>
      <div class="control">
        <input class="input" type="password" name="password" id="AdminPassword" placeholder="Ingrese una contraseña" v-model="password">
      </div>
    </div>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // service
  import administradorService from '../../services/administrador'
  // inputs
  import InputText from '../inputs/InputText.vue'
  
  export default {
    name: 'AdminFormAdd',
    components: {
      InputText
    },
    methods: {
      submit: function () {
        administradorService.agregar({
          nombre: this.nombre,
          apellidos: this.apellidos,
          correo: this.correo,
          activo: this.activo,
          password: this.password
        }).then(
          res => {
            this.admin = res
          }
        )
      }
    },
    data() {
      return {
        nombre: '',
        apellidos: '',
        correo: '',
        activo: true,
        password: '',
        admin: {}
      }
    }
  }

</script>
