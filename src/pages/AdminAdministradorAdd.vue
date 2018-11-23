<template>
  <admin-base-layout v-bind:admin="admin">
    <admin-form-add />
  </admin-base-layout>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import AdminFormAdd from '../components/shared/AdminFormAdd.vue'

  export default {
    name: 'AdminAdministradorInfo',
    components: {
      AdminBaseLayout,
      AdminFormAdd
    },
    data() {
      return {
        admin: {
          id: 1,
          nombre: 'Gerry'
        }
      }
    }
  }

</script>
