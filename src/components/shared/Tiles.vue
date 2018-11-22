<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">{{ infoObject.total }}</p>
      <p class="subtitle">{{ infoObject.nombre }}</p>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'Tile',
    props: {
      infoObject: {
        type: Object,
        required: true
      }
    }
  }
</script>
