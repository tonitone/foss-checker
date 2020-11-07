<template>
  <div class="hello">
    <h1>{{ headline }}</h1>
    <p>{{ msg }}</p>
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
<style scoped lang="scss"></style>
