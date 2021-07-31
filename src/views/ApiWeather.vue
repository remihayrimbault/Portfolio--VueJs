<template>
  <div class="weather">
    <GitHub></GitHub>
    <Project v-bind:content="projet"></Project>
    <Footer></Footer>
  </div>
</template>

<script>
import GitHub from './GitHub';
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ApiWeather',
  components: {
    GitHub,
    Footer,
    Project
  },
  computed: {
    projet(){
      return this.$store.state.projets[0];
    }
  }
}
</script>