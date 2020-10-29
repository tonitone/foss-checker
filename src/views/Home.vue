<template>
  <div class="home">
    <Hello headline="FOSS Checker " />
    <Hello msg="lets read your package.json" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue";

export default {
  name: "Home",
  components: {
    Hello
  }
};
</script>
