<template>
  <div>
    <p v-if="status === 'success'">Success</p>
    <p v-else-if="status === 'error'">Error. Please load your package.json again, or try again later</p>
    <p v-else-if="status === 'pending'">Please load your package.json</p>
    <p v-else-if="status === 'loading'">Loading npm-packages</p>

    <ul class="test-list">
      <li
        class="test-list--item"
        v-for="npmPackage in npmPackageList"
        :key="npmPackage.name"
      >
        Name: <strong>{{ npmPackage.name }}</strong> <br />
        Version: {{ npmPackage.version }} <br />
        Homepage: {{ npmPackage.homepage }} <br />
        License: {{ npmPackage.license }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      npmPackageList: {},
      status: "pending",
      error: false
    };
  },
  created() {
    console.log(`CREATED called, status: ${this.status}`);
    this.$eventHub.$on("eventFetchNpmRegistry", this.fetchNpmRegistry);
  },
  methods: {
    fetchNpmRegistry() {
      if (this.$store.state.npmPackageList) {
        console.log("wat los", typeof this.$store.state.npmPackageList);
        Object.keys(this.$store.state.npmPackageList).forEach(element => {
          this.status = "loading";
          let elementObject = this.$store.state.npmPackageList[element];
          console.log("methods: fetchNpmRegistry(): element", element);
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/https://registry.npmjs.com/${elementObject.name}/${elementObject.version}`
            )
            .then(res => {
              console.log(res.data);
              this.$store.commit("extendPackageInfo", res.data);
            })
            .catch(error => {
              console.log(error);
              this.error = false;
              this.status = "error";
              this.npmPackageList = {};
              // Manage errors if found any
            });
        });
        this.npmPackageList = this.$store.state.npmPackageList;
        this.status = this.error ? "error" : "status";
      }
    }
  },
  mounted() {
    // adding eventHub listener
    this.$eventHub.$on("eventFetchNpmRegistry", () => {
      console.log("eventFetchNpmRegistry triggered!");
    });
  },
  beforeDestroy() {
    // removing eventHub listener
    this.$eventHub.$off("eventFetchNpmRegistry");
  }
};
</script>

<style>
ul {
  margin: 0 auto;
  text-align: left;
}

li {
  display: block;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 15px;
}
</style>
