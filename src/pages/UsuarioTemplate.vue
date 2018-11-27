<template>
  <div>
    <user-navbar />
    <user-searchbar />
    <router-view>
    </router-view>
  </div>
</template>
<script>
  import usuarioService from '../services/usuario'
  import UserNavbar from '../components/layout/UserNavbar.vue'
  import UserSearchbar from '../components/layout/UserSearchbar.vue'
  export default {
    name: 'UsuarioTemplate',
    components: {
      UserNavbar,
      UserSearchbar
    },
    created() {
      const id = this.$route.params.id
      usuarioService.obtenerPorId(id).then(
        res => {
          this.usuario = res
        }
      )
    },
    data() {
      return {
        usuario: {}
      }
    }
  }

</script>
