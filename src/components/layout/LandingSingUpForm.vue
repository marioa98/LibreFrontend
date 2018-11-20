<template>
  <div class="box">
    <a class="button is-medium is-fullwidth">Iniciar Sesión</a>
    <hr>
    <form>
      <!-- nombre -->
      <input-text />
      <!-- apellidos -->
      <input-text />
      <!-- correo -->
      <input-text />
      <!-- password -->
      <input-text />
      <!-- facultad -->
      <input-text />
      <a class="button is-medium is-fullwidth">Registrarse</a>
    </form>
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
