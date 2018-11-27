<template>
<admin-base-layout v-bind:admin="admin">
    <router-view>
    </router-view>
</admin-base-layout>
</template>
<script>
  import administradorService from '../services/administrador'
  // layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  export default {
    name: 'AdminTemplate',
    components: {
      AdminBaseLayout
    },
    created() {
      const id = this.$route.params.id
      administradorService.obtenerPorId(id).then(
        res => {
          this.admin = res
        }
      )
    },
    data() {
      return {
        admin: {}
      }
    }
  }

</script>
