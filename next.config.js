const withSass = require("@zeit/next-sass");
const merge = require("webpack-merge");
const path = require("path");

const srcPath = path.resolve(__dirname, ".");
const pagesPath = `${srcPath}/pages`;
const compsPath = `${srcPath}/components`;
const assetsPath = `${srcPath}/assets`;
const imgPath = `${assetsPath}/img`;
const cssPath = `${assetsPath}/css`;

module.exports = withSass({
  webpack(config, options) {
    configMerge = merge(config, {
      resolve: {
        extensions: [".scss", ".png", ".jpg", ".jpeg", ".gif"],
        alias: {
          "@pages": pagesPath,
          "@comps": compsPath,
          "@css": cssPath,
          "@img": imgPath
        }
      }
    });
    return configMerge;
  }
});
