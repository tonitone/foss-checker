<template>
  <div class="home">
    <h1>FOSS Checker</h1>
    <h2>lets read your package.json</h2>

    <div id="fileReader">
      <pre rows="10" v-text="loadedFileContent"></pre>
      <file-reader @load="loadedFileContent = $event"></file-reader>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FileReader from "@/components/FileReader.vue";

export default {
  name: "Home",
  components: {
    FileReader
  },

  data() {
    return {
      loadedFileContent: ""
    };
  },
  props: {
    headline: String,
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/main.scss";

</style>