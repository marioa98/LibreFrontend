<template>
  <div>
    <admin-navbar />
    <section class="hero welcome is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> {{ "Hola, " + admin.nombre }} </h1>
          <h2 class="subtitle"> ¡Esperamos que estes teniendo un gran dia! </h2>
        </div>
      </div>
    </section>
    <section class="section is-medium is-storyworlds has-background">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-2-widescreen">
            <div class="menu">

              <p class="menu-label">General</p>
              <ul class="menu-list">
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Pefil</a>
                </li>
              </ul>
              
              <p class="menu-label">Archivos</p>
              <ul class="menu-list">
                  <li>
                      <a href="/">Ver archivos</a>
                  </li>
                  <li>
                      <a href="/">Agregar archivos</a>
                  </li>
              </ul>

              <p class="menu-label">Administradores</p>
              <ul class="menu-list">
                  <li>
                      <a href="/">Ver administradores</a>
                  </li>
                  <li>
                      <a href="/">Agregar administrador</a>
                  </li>
              </ul>

              <p class="menu-label">Facultades</p>
              <ul class="menu-list">
                  <li>
                      <a href="/">Ver facultades</a>
                  </li>
                  <li>
                      <a href="/">Agregar facultades</a>
                  </li>
              </ul>
            </div>
          </div>
          <div class="column is-9">

            <section class="info-tiles">
              <div class="tile is-ancestor has-text-centered">
                <admin-tiles v-for="co in currentObjects" v-bind:infoObject="co" v-bind:key="co.id" />
              </div>
            </section>
            <div class="columns is-multiline">
              <admin-searchbar class="column is-half" v-for="co in currentObjects" v-bind:infoObject="co" v-bind:key="co.id" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import AdminNavbar from '../components/layout/AdminNavbar.vue'
  import AdminTiles from '../components/shared/Tiles.vue'
  import AdminSearchbar from '../components/shared/Searchbar.vue'
  export default {
    name: 'AdminHome',
    components: {
      AdminNavbar,
      AdminTiles,
      AdminSearchbar
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        },
        currentObjects: [{
            id: 1,
            nombre: "Archivos",
            total: 100
          },
          {
            id: 2,
            nombre: "Usuarios",
            total: 50
          },
          {
            id: 3,
            nombre: "Administradores",
            total: 10
          },
          {
            id: 4,
            nombre: "Facultades",
            total: 60
          }
        ]
      }
    }
  }

</script>
<style scoped>

</style>
