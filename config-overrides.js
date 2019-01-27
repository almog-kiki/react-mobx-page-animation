
const {
    override,
    disableEsLint,
    addDecoratorsLegacy,
    addBabelPlugins,
    addBabelPresets,
    fixBabelImports,
    addLessLoader,
  } = require("customize-cra");

  
  module.exports = override(
    disableEsLint(),
    addDecoratorsLegacy(),
    ...addBabelPlugins(
        "babel-plugin-styled-components"
      ),
      fixBabelImports("react-app-rewire-mobx", {
        libraryDirectory: "",
        camel2DashComponentName: false
      }),
  );


// const { injectBabelPlugin } = require("react-app-rewired");
// const rewireMobX = require("react-app-rewire-mobx");

// module.exports = function override(config, env) {
//   config = injectBabelPlugin("babel-plugin-styled-components", config);
//   config = rewireMobX(config, env);

//   return config;
// };