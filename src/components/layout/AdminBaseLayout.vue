<template>
  <div>
    <admin-navbar />
    <admin-header v-bind:admin="admin" />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-2-widescreen">
            <admin-menu />
          </div>
          <div class="column is-10">
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import AdminNavbar from './AdminNavbar.vue'
  import AdminHeader from './AdminHeader.vue'
  import AdminMenu from './AdminMenu.vue'
  export default {
    name: 'AdminBaseLayout',
    components: {
      AdminNavbar,
      AdminHeader,
      AdminMenu
    },
    props: {
      admin: {
        type: Object,
        required: true
      }
    }
  }

</script>
