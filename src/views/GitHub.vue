<template>
  <div class="github">
    <a href="https://github.com/remihayrimbault">
      <img src="https://remihr.fr/img/github.png" alt="github logo">
    </a>
  </div>
</template>

<script>

export default {
  name: 'GitHub'
}

</script>

<style scoped lang="scss">

  .github {
    position: fixed;
    z-index: 10000;
    display: flex;
    align-items: center;
    align-content: center;
    bottom: 0;
    width: 10vw;
    right: 0;
    top: 0;

    a {
      transform: rotate(270deg);
      display: flex;
      justify-content: center;

      img {
        width: 90%;
      }
    }

    &:hover {
      background: rgba(255,255,255,0.1);
      animation: fade 2s linear;
    }
  }

  @keyframes fade {
    0% {
      background: rgba(255,255,255,0);
    }
    100% {
      background: rgba(255,255,255,0.1);
    }
  }

</style>