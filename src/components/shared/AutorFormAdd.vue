<template>
  <form v-on:submit.prevent="submit">
    <div class="field">
      <label class="label" for="AutorName">Nombre</label>
      <div class="control">
        <input class="input" type="text" name="name" id="AutorName" placeholder="Ingresa el nombre del autor" v-model="nombre">
      </div>
    </div>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  import autorService from '../../services/autor'
  export default {
    name: 'AutorFormAdd',
    methods: {
      submit: function () {
        autorService.agregar({
          nombre: this.nombre,
          alias: this.nombre
        }).then(
          res => {
            this.autor = res
          }
        )
      }
    },
    data() {
      return {
        nombre: '',
        autor: {}
      }
    }
  }

</script>
