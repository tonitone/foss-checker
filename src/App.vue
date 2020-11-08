<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <div id="fileReader">
      <pre rows="10" v-text="loadedFileContent"></pre>
      <file-reader @load="loadedFileContent = $event"></file-reader>
    </div>
  </div>
</template>

<script>
import FileReader from "./components/FileReader";

export default {
  name: "Hello",
  data: () => ({ loadedFileContent: "" }),
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
    color: #ccc;

    &.router-link-exact-active {
      color: #f90;
    }
  }
}
</style>
