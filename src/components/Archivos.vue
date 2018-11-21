<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img src="../assets/logo.png">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-1by1">
            <img src="../assets/logo.png">
          </figure>
        </div>
        <div class="media-content">
            <p class="title is-6">
                <strong>
                    {{ archivo.nombre }}
                </strong>
            </p>
            <p class="title is-6">
                {{ archivo.autores[0].nombre }}
            </p>
        </div>
        <div class="content">
            <small>
                {{ archivo.descripcion}}
            </small>
        </div>
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
