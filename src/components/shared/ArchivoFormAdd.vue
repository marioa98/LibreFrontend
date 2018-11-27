<template>
  <form v-on:submit.prevent="submit">
    <div class="field">
      <label class="label" for="ArchivoName">Nombre</label>
      <div class="control">
        <input class="input" type="text" name="name" id="ArchivoName" placeholder="Ingresa el nombre del archivo"
          v-model="nombre">
      </div>
    </div>
    <div class="field">
      <label class="label" for="ArchivoURL">URL</label>
      <div class="control">
        <input class="input" type="url" name="url" id="ArchivoURL" placeholder="Ingresa el link" v-model="uri">
      </div>
    </div>
    <div class="field">
      <label class="label" for="ArchivoDescripcion">Descripción</label>
      <div class="control">
        <input class="input" type="text" name="description" id="ArchivoDescripcion" placeholder="Ingresa una descripcion"
          v-model="descripcion">
      </div>
    </div>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // service
  import archivoService from '../../services/archivo'

  export default {
    name: 'AdminFormInfo',
    methods: {
      submit: function () {
        archivoService.agregar({
          nombre: this.nombre,
          uri: this.uri,
          img: this.img,
          descripcion: this.descripcion,
          activo: this.activo
        }).then(
          res => {
            this.archivo = res
          }
        )
      }
    },
    data() {
      return {
        nombre: '',
        uri: '',
        img: 'a link from somewhere',
        descripcion: '',
        activo: true,
        archivo: {}
      }
    }
  }

</script>
