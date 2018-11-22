<template>
  <div>
    <admin-navbar />
    <admin-header v-bind:admin="admin"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-2-widescreen">
            <admin-menu />
          </div>
          <div class="column is-10">
            <section class="info-tiles">

              <div class="tile is-ancestor has-text-centered is-centered">
                <admin-tiles v-for="co in currentObjects" v-bind:infoObject="co" v-bind:key="co.id" />
              </div>
            
            </section>
            <div class="columns is-multiline is-centered">
              <admin-searchbar class="column is-5" v-for="co in currentObjects" v-bind:infoObject="co" v-bind:key="co.id" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  // layout
  import AdminNavbar from '../components/layout/AdminNavbar.vue'
  import AdminHeader from '../components/layout/AdminHeader.vue'
  import AdminMenu from '../components/layout/AdminMenu.vue'

  // shared
  import AdminTiles from '../components/shared/Tiles.vue'
  import AdminSearchbar from '../components/shared/Searchbar.vue'

  export default {
    name: 'AdminHome',
    components: {
      AdminNavbar,
      AdminTiles,
      AdminSearchbar,
      AdminMenu,
      AdminHeader
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
