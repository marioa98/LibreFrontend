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
    <div class="field">
      <label class="label">Autor</label>
      <div class="control">
        <div class="select">
          <select v-model="autorId">
            <option v-for="a in autores" v-bind:value="a.nombre" v-bind:key="a.id"> {{ a.nombre }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label" for="ArchivoAutor">O agregar el autor</label>
      <div class="control">
        <input class="input" type="text" name="autor" id="ArchivoAutor" placeholder="Ingresa el nombre del autor"
          v-model="autorName">
      </div>
    </div>
    <div class="field">
      <label class="label">Etiquetas</label>
      <div class="control">
        <div class="select">
          <select v-model="etiquetaId">
            <option v-for="e in etiquetas" v-bind:value="e.id" v-bind:key="e.id"> {{ e.keyword }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label" for="ArchivoEtiqueta">O agregar nueva etiqueta</label>
      <div class="control">
        <input class="input" type="text" name="etiqueta" id="ArchivoEtiqueta" placeholder="Ingresa la etiqueta" v-model="etiquetaName">
      </div>
    </div>
    <div class="field">
      <label class="label">Tipo</label>
      <div class="control">
        <div class="select">
          <select v-model="tipoId">
            <option v-for="t in tipos" v-bind:value="t.id" v-bind:key="t.id"> {{ t.tipo }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // service
  import archivoService from '../../services/archivo'
  import autorService from '../../services/autor'
  import etiquetaService from '../../services/etiqueta'
  import tipoService from '../../services/tipo'

  export default {
    name: 'AdminFormInfo',
    mounted() {
      autorService.obtenerTodos().then(res => {
        this.autores = res
      })
      etiquetaService.obtenerTodos().then(res => {
        this.etiquetas = res
      })
      tipoService.obtenerTodos().then(res => {
        this.tipos = res
      })
    },
    methods: {
      submit: function () {
        archivoService.agregar({
          nombre: this.nombre,
          uri: this.uri,
          img: this.img,
          descripcion: this.descripcion,
          activo: this.activo
        }).then(res => { this.archivo = res })
      }
    },
    data() {
      return {
        nombre: '',
        uri: '',
        img: 'a link from somewhere',
        descripcion: '',
        activo: true,
        autorId: '',
        etiquetaId: '',
        tipoId: '',
        autores: [],
        etiquetas: [],
        tipos: [],
        autorName: '',
        etiquetaName: '',
        archivo: {}
      }
    }
  }

</script>
