<template>
  <div class="column is-6 is-4-widescreen is-flex">
    <div class="card is-storyworld">
      <a class="card-header has-text-centered" href="/">
        <div class="card-image">
        </div>
      </a>
      <div class="card-body">
        <a href="/">
          <div class="card-title">
            {{ archivo.nombre }}
          </div>
        </a>
        <div class="card-meta">
          {{ archivo.autores[0].nombre }}
        </div>
        <div class="card-description">
          <p>{{ archivo.descripcion }}</p>
        </div>
      </div>
      <div class="card-footer">
        <a class="button is-outlined" href="/">
          Ver
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Archivos',
    props: {
      archivo: {
        type: Object,
        required: true
      }
    }
  }

</script>
<style scoped>
  .card-image {
    background-image: url('../assets/logo.png');
  }

  .card.is-storyworld {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 auto;
    max-width: 360px;
    background-color: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    overflow: hidden;
    transition-duration: 172ms;
    will-change: transform, box-shadow
  }

  .card.is-storyworld:hover,
  .card.is-storyworld.is-hovered,
  .card.is-storyworld:focus,
  .card.is-storyworld.is-focused,
  .card.is-storyworld:active,
  .card.is-storyworld.is-active,
  .card.is-storyworld .is-touched {
    box-shadow: 0 10px 20px rgba(220, 220, 220, 0.5);
    transform: translateY(-4px);
    color: inherit
  }

  .card.is-storyworld:hover .card-image,
  .card.is-storyworld.is-hovered .card-image,
  .card.is-storyworld:focus .card-image,
  .card.is-storyworld.is-focused .card-image,
  .card.is-storyworld:active .card-image,
  .card.is-storyworld.is-active .card-image,
  .card.is-storyworld .is-touched .card-image {
    transform: scale(1.05)
  }

  .card.is-storyworld .card-header {
    margin: 0;
    overflow: hidden;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .card.is-storyworld .card-image {
    border-radius: 10px 10px 0 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition-duration: 172ms;
    will-change: transform
  }

  .card.is-storyworld .card-image:before {
    display: block;
    content: "";
    padding-bottom: 63.80597%
  }

  .card.is-storyworld .card-body {
    -ms-flex: 1;
    flex: 1;
    padding: 2rem 1.5rem
  }

  .card.is-storyworld .card-title {
    color: #463853;
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 1.2
  }

  .card.is-storyworld .card-meta {
    margin-top: 0.25rem
  }

  .card.is-storyworld .card-meta i {
    margin-right: 0.5rem
  }

  .card.is-storyworld .card-description {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.66667
  }

  .card.is-storyworld .card-footer {
    padding: 2rem 1.5rem
  }

</style>
