const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/jenny/Development/jenniferolsen.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/Users/jenny/Development/jenniferolsen.github.io/src/templates/allTagsIndex.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/Users/jenny/Development/jenniferolsen.github.io/src/templates/singleTagIndex.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/jenny/Development/jenniferolsen.github.io/src/templates/blog-post.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/jenny/Development/jenniferolsen.github.io/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jenny/Development/jenniferolsen.github.io/src/pages/index.js")))
}

