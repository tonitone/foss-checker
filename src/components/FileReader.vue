<template>
  <div>
    <label class="text-reader">
      <input type="file" ref="packageJsonFile" @change="loadTextFromFile" />
    </label>
    <FetchNpmDetails></FetchNpmDetails>
  </div>
</template>

<script>
import FetchNpmDetails from "@/components/FetchNpmDetails";
const returnCleanedVersionString = string => {
  return string.replace(/^\D*/, "");
};
const parseNpmPackageDetails = npmPackageObject => {
  let returns = {};
  for (let npmPackage in npmPackageObject) {
    let version = returnCleanedVersionString(npmPackageObject[npmPackage]);
    returns[npmPackage] = { name: npmPackage, version: version };
  }
  console.log(returns, "returns");
  return returns;
};

let isPackageListloaded;

export default {
  components: {
    FetchNpmDetails
  },
  mounted() {},
  data() {
    return {
      isPackageListloaded
    };
  },
  methods: {
    loadTextFromFile() {
      const file = this.$refs.packageJsonFile.files[0];
      const fileReader = new FileReader();
      let packageJsonList = {};

      if (!file || file.type !== "application/json") {
        console.log("not a json file!");
        return;
      }

      fileReader.readAsText(file);

      fileReader.onload = evt => {
        let text = evt.target.result;
        try {
          packageJsonList = JSON.parse(text).dependencies;
        } catch (e) {
          console.log("Sorry, your file doesn't appear to be valid JSON data.");
        }

        this.$store.commit(
          "addPackages",
          parseNpmPackageDetails(packageJsonList)
        );

        isPackageListloaded = true;
        this.$eventHub.$emit("eventFetchNpmRegistry");
      };

      fileReader.onerror = evt => {
        console.error(evt);
      };
    }
  }
};
</script>
