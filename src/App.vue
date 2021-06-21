<template>
  <TheNavbar />
  <TheHero />
  <ThePlan />
  <TheAbout />
  <TheSocial/>
  <TheFooter/>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheHero from './components/TheHero.vue'
import ThePlan from './components/ThePlan.vue'
import TheAbout from './components/TheAbout.vue'
import TheSocial from './components/TheSocial.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {TheNavbar, TheHero, ThePlan, TheAbout, TheSocial, TheFooter}
}
</script>

<style>
</style>
