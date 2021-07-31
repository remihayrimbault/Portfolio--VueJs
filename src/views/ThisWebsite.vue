<template>
  <div class="thiswebsite">
    <GitHub></GitHub>
    <Project v-bind:content="projet"></Project>
    <Footer></Footer>
  </div>
</template>

<script>
import GitHub from "@/views/GitHub";
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ThisWebsite',
  components: {
    GitHub,
    Footer,
    Project
  },
  computed: {
    projet(){
      return this.$store.state.projets[4];
    }
  }
}
</script>