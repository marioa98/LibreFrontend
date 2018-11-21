<template>
  <div>
    <user-navbar />
    <user-searchbar />

    <div class="container results">
      <div class="columns is-multiline">
        <div class="column is-one-quarter">
          <libre-archivo v-for="archivo in archivos" v-bind:archivo="archivo" v-bind:key="archivo.id" />
        </div>
      </div>
    </div>

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
  .results {
    margin-top: 50px;
  }

</style>
