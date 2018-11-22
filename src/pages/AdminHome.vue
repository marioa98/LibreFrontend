<template>
  <admin-base-layout>
    <admin-navbar slot="navbar" />
    <admin-header slot="header" v-bind:admin="admin" />
    <admin-menu slot="menu" />
    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered is-centered">
        <admin-tiles v-for="co in currentObjects" v-bind:infoObject="co" v-bind:key="co.id" />
      </div>
    </section>
    <div class="columns is-multiline is-centered">
      <admin-searchbar class="column is-5" v-for="co in currentObjects" v-bind:infoObject="co" v-bind:key="co.id" />
    </div>
  </admin-base-layout>
</template>
<script>
  // layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import AdminNavbar from '../components/layout/AdminNavbar.vue'
  import AdminHeader from '../components/layout/AdminHeader.vue'
  import AdminMenu from '../components/layout/AdminMenu.vue'
  // shared
  import AdminTiles from '../components/shared/Tiles.vue'
  import AdminSearchbar from '../components/shared/Searchbar.vue'

  export default {
    name: 'AdminHome',
    components: {
      AdminBaseLayout,
      AdminNavbar,
      AdminHeader,
      AdminMenu,
      AdminTiles,
      AdminSearchbar,
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
