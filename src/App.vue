<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <div id="fileReader">
      <file-reader @load="text = $event"></file-reader>
      <pre rows="10" v-text="text"></pre>
      <br />
      <file-reader @load="text = $event"></file-reader>
    </div>
  </div>
</template>

<script>
import FileReader from "./components/FileReader";

export default {
  name: "Hello",
  data: () => ({ text: "" }),
  components: {
    FileReader
  },
  props: {
    headline: String,
    msg: String
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
