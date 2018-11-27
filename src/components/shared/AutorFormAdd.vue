<template>
  <form>
    <div class="field">
      <label class="label" for="AutorName">Nombre</label>
      <div class="control">
        <input class="input" type="text" name="name" id="AutorName" placeholder="Ingresa el nombre del autor"
          v-model="nombre">
      </div>
    </div>
    <button class="button">Agregar</button>
  </form>
</template>
<script>
  // inputs
  import InputText from '../inputs/InputText.vue'
  export default {
    name: 'AutorFormAdd',
    components: {
      InputText
    },
    data() {
      return {
        fields: [{
          id: 1,
          ident: 'AutorName',
          label: 'Nombre',
          name: 'name',
          placeholder: '',
          value: '',
          type: 'text'
        }]
      }
    }
  }

</script>
