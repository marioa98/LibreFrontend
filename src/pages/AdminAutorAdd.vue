<template>
  <div>
    <autor-form-add />
  </div>
</template>
<script>
  //layout
  import AdminBaseLayout from '../components/layout/AdminBaseLayout.vue'
  import AutorFormAdd from '../components/shared/AutorFormAdd.vue'

  export default {
    name: 'AdminAutorAdd',
    components: {
      AdminBaseLayout,
      AutorFormAdd
    },
    data() {
      return {
      }
    }
  }

</script>
