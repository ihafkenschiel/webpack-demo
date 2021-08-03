# Webpack Demo

Tutorial URL: https://webpack.js.org/guides/getting-started/

## Common Commands

Install a package (eg. lodash) to production bundle
`npm install --save lodash`

Install a package to dev dependencies (eg. webpack and webpack-cli) such as a linter or testing libraries
`npm install webpack webpack-cli --save-dev`

Generate the bundle
`npx webpack`

Generate bundle in dev mode
`npx webpack --mode=development`
or
```
module.exports = {
  mode: 'development',
};
```

Build with Config file
`npx webpack --config webpack.config.js`
If named `webpack.config.js` you don't need to specify it though.