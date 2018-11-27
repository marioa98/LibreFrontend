<template>
  <div>
    <admin-form-add />
  </div>
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
    }
  }

</script>
