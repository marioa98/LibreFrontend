<template>
  <section class="hero is-bold column">
    <div class="hero-body has-margin-top-md has-margin-bottom-md">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <h1 class="title is-1 is-spaced">LIBRE</h1>
            <p class="subtitle">Sistema de Gestión para Repositorios Digitales</p>
          </div>
          <div class="column is-5 is-offset-1">
            <sing-up />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SingUp from './LandingSingUpForm.vue';
  export default {
    name: 'LandingHeader',
    components: {
      SingUp
    }
  }

</script>
