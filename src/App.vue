<template>
  <div id="nav">
    <router-link to="/">rhr</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
html {
  overflow-x: hidden;
}

$texte : #DFD2C3;
$fond : #171717;

body {
  margin: 0;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $texte;
  background: $fond;
}

h2 {
  font-size: 50px;
  font-weight: 600;
  margin: 0 0 4% 10%;
}

#nav {
  padding: 50px 0;
  display: block;
  width: 80%;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: $texte;

    &.router-link-exact-active {
      color: $texte;

    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
