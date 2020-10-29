<template>
  <div class="hello">
    <h1>{{ headline }}</h1>
    <p>{{ msg }}</p>
    <p>
      Check digga
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    headline: String,
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #ff0000;
}
</style>
