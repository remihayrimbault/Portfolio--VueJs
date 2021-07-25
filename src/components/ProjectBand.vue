<template>
  <div class="projects">
    <router-link :to="content.coolname" style="text-decoration: none;">
    <a :class="content.coolname">
      Go to the project : {{content.beautifulname}}
      <!--
      <div class="bande">
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
        <div>{{ content.beautifulname }}<img :src="content.smiley"></div>
      </div>
      -->
    </a>
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

@keyframes extend {
  0% {
    opacity: 1;
    height: 100vh;
  }

  100% {
    opacity: 1;
    height: 0;
  }
}

@keyframes slidein {
  0% {
    transform: translateX(-25vw);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideout {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-25vw);
  }
}

.projects {
  margin: 0 0;
  //transform: rotateZ(-10deg) scale(1.2);
  line-height: 1.5;
}

.bande {
  display: flex;
  flex-direction: row;
  padding: 5% 0;
  margin: 0;
  width: 150vw;

  div {
    width: 25vw;
    display: block;
  }
}

.bande:hover {
  text-decoration: none;
}

.api-weather {
  //animation: slidein 2s linear infinite;
  text-align: center;
  background-color: #df7819;
  color: white;
  font-size: 26px;
  display: block;

  img {
    width: 30%;
  }
}

.api-cocktail {
  background-color: #eb6db4;
  text-align: center;
  color: white;
  font-size: 26px;
  //animation: slidein 2s linear infinite;
  display: block;

  img {
    width: 30%;
  }
}

.showcase-carpenter {
  background-color: #ddbe1a;
  color: white;
  text-align: center;
  //animation: slideout 2s linear infinite;
  font-size: 26px;
  display: block;

  img {
    width: 30%;
    margin: 0 auto;
  }
}

.showcase-agency {
  background-color: #dbf8ff;
  text-align: center;
  color: #01003f;
  //animation: slideout 2s linear infinite;
  font-size: 26px;
  display: block;

  img {
    width: 30%;
  }
}

.this-website {
  background-color: #dfd3c3;
  text-align: center;
  color: #171717;
  //animation: slidein 2s linear infinite;
  font-size: 26px;
  display: block;

  img {
    width: 30%;
  }
}

.showcase-electrician {
  background: rgba(238,32,36,1);
  text-align: center;
  color: white;
  //animation: slideout 2s linear infinite;
  font-size: 26px;
  display: block;

  img {
    width: 30%;
  }
}

#text {
  display: block;
  margin: auto 0;
}
</style>