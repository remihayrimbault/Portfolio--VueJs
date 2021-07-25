<template>
  <div class="showcaseagency">
    <Project v-bind:content="projet"></Project>
    <Footer></Footer>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ShowcaseAgency',
  components: {
    Footer,
    Project
  },
  computed: {
    projet(){
      return this.$store.state.projets[3];
    }
  }
}
</script>