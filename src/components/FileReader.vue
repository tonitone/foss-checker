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
      let packageJson = {};

      if (!file || file.type !== "application/json") {
        console.log("not a json file!");
        return;
      }

      // fileReader.onload = e => this.$emit("load", e.target.result);
      fileReader.onload = evt => {
        let text = evt.target.result;
        try {
          let json = JSON.parse(text);
          packageJson = {
            dependencies: json.dependencies,
            devDependencies: json.devDependencies
          };
        } catch (e) {
          alert("Sorry, your file doesn't appear to be valid JSON data.");
        }

        const returnCleanedVersionString = string => {
          return string.replace(/^\D*/, "");
        };

        let parseNpmPackageDetails = npmPackageObject => {
          let returns = [];
          for (let npmPackage in npmPackageObject) {
            let version = returnCleanedVersionString(
              npmPackageObject[npmPackage]
            );
            returns.push({ name: npmPackage, version: version });
          }
          return returns;
        };

        let dependencies = parseNpmPackageDetails(packageJson.devDependencies);
        let devDependencies = parseNpmPackageDetails(packageJson.dependencies);

        console.group("devDependencies:");
        console.dir(devDependencies);
        console.groupEnd();
        console.group("devDependencies:");
        console.dir(dependencies);
        console.groupEnd();
      };
      fileReader.readAsText(file);
    }
  }
};
</script>
