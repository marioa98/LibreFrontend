<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6 is-offset-3">
            <h3 class="title has-text-centered">Unirse a LIBRE</h3>
            <p class="subtitle has-text-centered">Cree una cuenta personal</p>
            <div class="box">
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
  export default {
    name: 'Login',
    components: {
      InputText
    }
  }

</script>
<style>

</style>
