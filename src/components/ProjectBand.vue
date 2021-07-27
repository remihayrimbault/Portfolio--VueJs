<template>
  <div class="projects">
    <router-link :to="content.coolname" style="text-decoration: none;" :class="content.coolname">
    <div class="name"><h2>{{ content.beautifulname }}</h2></div>

      <!--
    <a :class="content.coolname">
      Go to the project : {{content.beautifulname}}
      <div class="bande">
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
      </div>
    </a>
    -->
    <div class="content">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
      <span>Go to the project</span>
      <img class="marquee__img" :src="content.smiley">
    </div>
    <div class="background"></div>

    </router-link>
  </div>
</template>

<script>

export default {
  name: 'ProjectBand',
  props: {
    content: Object
  }
}

</script>

<style scoped lang="scss">

.projects {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-top: 1px solid #dfd1c3;
  border-bottom: 1px solid #dfd1c3;
}

h2 {
  text-transform: uppercase;
  position: absolute;
  color: #dfd1c3;
  padding: 2%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.background {
  position: absolute;
  z-index:10;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
}

.projects:hover {
  .content {
    opacity: 100%;
  }
  .background {
    height: 100%;
  }
}

.content {
  height: 100%;
  width: fit-content;
  align-items: center;
  display: flex;
  position: relative;
  animation: marquee 15s linear infinite,enter 2s;
  will-change: transform;
  opacity: 0;
  z-index: 1000;
}

.menu__item-link,
.content span {
  white-space: nowrap;
  font-size: 4vw;
  line-height: 1.2;
  font-weight: 600;
  padding: 1vh 1vw 0;
  text-transform: uppercase;
}

.content span {
  text-align: center;
  color: var(--marquee-text);
  font-weight: 400;
}

.marquee__img {
  width: 8vw;
  height: 70%;
  margin: 0 2vw;
  background-size: cover;
  background-position: 50% 50%;
  animation: rotation 1s infinite;
}

@keyframes marquee {
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes rotation {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes enter {
  100% {
    opacity: 1;
  }
}

.api-weather {
  .content {
    color: white;
  }
  .background{
    background: #df7819;
  }
}

.api-cocktail {
  .content {
    color: white;
  }
  .background{
    background: #eb6db4;
  }
}

.showcase-carpenter {
  .content {
    color: white;
  }
  .background{
    background: #ddbe1a;
  }
}

.showcase-agency {
  .content {
    color: #082B3B;
  }
  .background{
    background: #dbf8ff;
  }
}

.this-website {
  .content {
    color: #171717;
  }
  .background{
    background: #dfd3c3;
  }
}

.showcase-electrician {
  .content {
    color: white;
  }
  .background{
    background: rgba(238,32,36,1);
  }
}

#text {
  display: block;
  margin: auto 0;
}
</style>