<template>
  <section class="hero is-bold column">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">LIBRE</h1>
        <h2 class="subtitle">Sistema de Gestión para Repositorios Digitales</h2>
      </div>
    </div>
    <sing-up />
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
