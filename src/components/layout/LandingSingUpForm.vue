<template>
  <div class="column box">
    <router-link class="button is-medium is-fullwidth" to="/login">Iniciar Sesión</router-link>
    <hr>
    <router-link class="button is-medium is-fullwidth" to="/singup">Crear una cuenta</router-link>
  </div>
</template>
<script>
  import InputText from '../inputs/InputText.vue';
  export default {
    name: 'LandingSingUp',
    components: {
      InputText
    }
  }

</script>
