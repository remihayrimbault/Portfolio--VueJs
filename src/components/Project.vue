<template>
  <div class="hello">
    <div class="wrap_project">
      <div class="wrap_project__left">
        <div id="scene" class="wrap_project__left--img">
          <img class="wrap_project__left--img__1" :src="content.illus">
          <img class="wrap_project__left--img__2" src="https://remihr.fr/illus/tache.png" data-depth="0.8">
        </div>
        <a class="link" :href="content.link">link</a>
      </div>
      <div class="wrap_project__right animate__animated animate__slideInRight">
        <h2>{{ content.beautifulname }}</h2>
        <p>{{ content.desc }}</p>
        <h3>Tools I used for this project :</h3>
        <p>{{ content.tools }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap_project {
  width: 80%;
  margin: 2% auto 0;
  display: flex;
  flex-direction: row;

  &__left {
    display: flex;
    flex-direction: column;
    width: 50%;

    &--img {
      width: 100%;
      position: relative;

      img {
        display: block;
        margin: 0 auto;
        position: absolute;
      }

      &__1 {
        width: 70%;
        z-index: 10;
        transform: translateX(25%);
      }

      &__2 {
        width: 50%;
        transform: translateY(25%);
        z-index: 1;
      }
    }

    a {
      display: block;
      margin: 85% auto 5%;
      padding: 1%;
      width: 15%;
      text-align: center;
      color: #dfd3c3;
      border: 2px solid #dfd3c3;
      border-radius: 30px;
      background: none;
      transition: 1s;
      text-decoration: none;

      &:hover {
        background: #dfd3c3;
        color: #171717;
        text-decoration: none;
      }
    }
  }

  &__right {
    text-align: right;
    display: block;
    width: 50%;

    h2 {
      font-size: 55px;
      font-weight: 600;
    }

    h3 {
      font-size: 30px;
      font-weight: 600;
    }

    p {
      margin: 8% 0;
    }
  }
}

@media (max-width: 450px) {

  .wrap_project {
    flex-direction: column-reverse;

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
    }
  }
}
</style>