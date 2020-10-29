<template>
  <label class="text-reader">
    <input type="file" @change="loadTextFromFile" />
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const fileReader = new FileReader();

      fileReader.onload = e => this.$emit("load", e.target.result);
      fileReader.readAsText(file);
    }
  }
};
</script>
