<template>
  <div>
    <user-navbar />
    <user-searchbar />

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
  import UserNavbar from '../components/layout/UserNavbar.vue'
  import UserSearchbar from '../components/layout/UserSearchbar.vue'
  import LibreArchivo from '../components/Archivos.vue'
  export default {
    name: 'UserHome',
    components: {
      UserNavbar,
      UserSearchbar,
      LibreArchivo
    },
    data() {
      return {
        archivos: [{
            "id": 2,
            "nombre": "Matadero Cinco",
            "descripcion": "Descripción no disponible",
            "uri": "https://www.gandhi.com.mx/matadero-cinco",
            "img": "fuck base64",
            "activo": true,
            "createdAt": "2018-11-19T19:10:05.368+0000",
            "updatedAt": "2018-11-19T19:10:05.368+0000",
            "autores": [{
              "id": 1,
              "nombre": "Charles Bukowski",
              "alias": "Bukowski",
              "createdAt": "2018-11-19T19:13:08.177+0000",
              "updatedAt": "2018-11-19T19:13:08.177+0000"
            }],
            "etiquetas": [],
            "comentarios": [],
            "tipos": null
          },
          {
            "id": 2,
            "nombre": "Matadero Cinco",
            "descripcion": "Descripción no disponible",
            "uri": "https://www.gandhi.com.mx/matadero-cinco",
            "img": "fuck base64",
            "activo": true,
            "createdAt": "2018-11-19T19:10:05.368+0000",
            "updatedAt": "2018-11-19T19:10:05.368+0000",
            "autores": [{
              "id": 1,
              "nombre": "Charles Bukowski",
              "alias": "Bukowski",
              "createdAt": "2018-11-19T19:13:08.177+0000",
              "updatedAt": "2018-11-19T19:13:08.177+0000"
            }],
            "etiquetas": [],
            "comentarios": [],
            "tipos": null
          }
        ],
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
