const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const lessModifyVars = {
  "layout-header-background": "#FFF",
  "layout-header-height": "80px"
};

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: lessModifyVars
  })
);
