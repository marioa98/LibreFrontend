<template>
  <div>
    <facultad-form-add />
  </div>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import FacultadFormAdd from '../components/shared/FacultadFormAdd.vue'

  export default {
    name: 'AdminAutorAdd',
    components: {
      AdminBaseLayout,
      FacultadFormAdd
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
