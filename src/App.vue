<template>
  <div id="app">
    <div class="sidebar-mask"></div>
    <div id="nav" class="sidebar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="page">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.page {
  padding-left: 250px;
  padding-top: 44px;
  top: 44px;
}

</style>
