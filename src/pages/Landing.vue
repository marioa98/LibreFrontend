<template>
  <div>
    <landing-navbar />
    <landing-header id="home" />

    <section class="section">
      <landing-team id="team" />
    </section>

    <section class="section">
      <landing-help id="help" />
    </section>

    <section class="section">
      <landing-contact id="contact" />
    </section>

  </div>
</template>

<script>
  import LandingNavbar from '../components/layout/LandingNavbar.vue'
  import LandingHeader from '../components/layout/LandingHeader.vue'

  import LandingTeam from '../components/layout/Team.vue'
  import LandingHelp from '../components/layout/Help.vue'
  import LandingContact from '../components/layout/Contact.vue'

  export default {
    name: 'landing',
    components: {
      LandingNavbar,
      LandingHeader,
      LandingTeam,
      LandingHelp,
      LandingContact
    }
  }

</script>
