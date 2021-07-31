<template>
  <div class="home">
    <div class="me">
      <GitHub></GitHub>
      <div>
        <h1 class="h1_rhr animate__animated animate__slideInLeft"> Rémi Hay--Rimbault</h1>
      </div>
      <div>
        <img class="image_rhr" alt="Vue logo" src="../assets/gif.gif">
        <h2 class="h2_rhr animate__animated animate__slideInRight"> Student in Web Development</h2>
      </div>
    </div>
    <div class="menu_projects">
      <ProjectBand v-for="projet in full_projets" v-bind:content="projet"></ProjectBand>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import GitHub from './GitHub';
import ProjectBand from "@/components/ProjectBand";
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    GitHub,
    ProjectBand,
    Footer
  },
  computed: {
    projet(){
      return this.$store.state.projets[5].illus;
    },
    full_projets(){
      return this.$store.state.projets;
    }
  }
}

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Project from "@/components/Project";

gsap.config({
  nullTargetWarn: false
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".h1_rhr", {
  ScrollTrigger: {
    trigger: ".h1_rhr",
    start: "top center",
    end: "top",
    scrub: 1,
    marker: true
  },
  x: 400,
  rotation: 360,
  ease: "none",
  duration: 3
});

</script>

<style scoped lang="scss">
  .me {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto 20%;

    .h1_rhr {
      margin: 5% 0;
      transform: translateY(0);
      transition: all 1s ease-in-out;
    }

    .image_rhr {
      width: 50%;
      display: block;
      margin: 0 auto;
    }

    .h2_rhr {
      text-align: right;
      margin: 5% 0;
      font-weight: 400;
    }
  }

  .menu_projects {
    margin-bottom: 20%;
    text-align: center;
  }

  @media (max-width: 450px) {

    .me {
      .h2_rhr {
        font-size: 30px;
      }
    }
  }
</style>