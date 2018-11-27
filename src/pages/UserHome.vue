<template>
  <div>
    <section class="section is-medium is-storyworlds has-background">
      <div class="container">
        <div class="columns">
          <div class="columns is-3 is-2-widescreen">
          </div>
          <div class="column is-9 is-10-widescreen">
            <div class="columns is-multiline">
              <libre-archivo v-for="archivo in archivos" v-bind:archivo="archivo" v-bind:key="archivo.id" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import archivoService from '../services/archivo'
  import LibreArchivo from '../components/Archivos.vue'
  export default {
    name: 'UserHome',
    components: {
      LibreArchivo
    },
    mounted() {
      archivoService.obtenerTodos().then(
        res => {
          this.archivos = res
        }
      )
    },
    data() {
      return {
        archivos: []
      }
    }
  }

</script>
<style>
  .section.is-storyworld .title {
    margin-top: 2rem
  }

  .section.is-storyworld .subtitle {
    max-width: 680px
  }

  .section.is-storyworld .section-media {
    margin-top: 2rem;
    border-radius: 10px;
    overflow: hidden
  }

  .section.is-storyworld .section-media img {
    display: block
  }

</style>
