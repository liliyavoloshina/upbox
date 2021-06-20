<template>
  <TheNavbar />
  <TheHero />
  <ThePlan />
  <TheAbout />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheHero from './components/TheHero.vue'
import ThePlan from './components/ThePlan.vue'
import TheAbout from './components/TheAbout.vue'
export default {
  name: 'App',
  components: {TheNavbar, TheHero, ThePlan, TheAbout}
}
</script>

<style>
</style>
