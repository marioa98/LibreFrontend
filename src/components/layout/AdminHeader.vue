<template>
  <section class="hero welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"> {{ "Hola, " + admin.nombre }} </h1>
        <h2 class="subtitle"> ¡Esperamos que estes teniendo un gran dia! </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AdminHeader',
    props: {
        admin: {
            type: Object,
            required: true
        }
    }
}
</script>
