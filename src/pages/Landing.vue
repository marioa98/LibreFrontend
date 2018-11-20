<template>
  <div>
      <landing-navbar />
      <landing-header />
  </div>
</template>

<script>
  import LandingNavbar from '../components/layout/LandingNavbar.vue'
  import LandingHeader from '../components/layout/LandingHeader.vue'

  export default {
    name: 'landing',
    components: {
      LandingNavbar,
      LandingHeader
    }
  }

</script>
