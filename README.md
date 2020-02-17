Attempting to set up a react app from scratch by configuring alongside this guide:
  https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

  npm init && git init

  add .gitignore and append `node_modules`, `dist`, and `.gitignore` to it
  
  add dirs named `src` and `public`

  added `index.html` to public

  install babel 
    https://babeljs.io/docs/en/next/
    Babel is a toolchain that can be used to convert ECMA script into backwards compatible versions of JS.
    It is used to transform syntax, polyfill features that are mising in your dev env, Source code transformations, etc.
  
  run:
      npm i --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0

    add `.bashrc` file to project root and add:
      {
        "presets": ["@babel/env", "@babel/preset-react]
      }
    
  

  install webpack:
    Webpack is a bundler: it has a configuration file that maps an entrypoint file that it then traverses through and compiles lists of 
      plugins/dependencies to load in the correct order.
      https://survivejs.com/webpack/what-is-webpack/
      https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/

  run:
      npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2

  make and configure webpack.config.js:

    const path = require("path");
    const webpack = require("webpack");

    module.exports = {
      entry: "./src/index.js",
      mode: "development",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      resolve: { extensions: ["*", ".js", ".jsx"] },
      output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
      },
      devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
      },
      plugins: [new webpack.HotModuleReplacementPlugin()]
    };

  install react and react-dom:

      npm i react@16.5.2 react-dom@16.5.2

  Add a react component (something that will render to show everything is working)

  Install react-hot-loader (reloads live page to avoid having to reload in between changes to code)
    https://github.com/gaearon/react-hot-loader

      npm i react-hot-loader

I added this script to my package.json for starting my webpack server:
  {
    "wpserv": "NODE_ENV=development ./node_modules/webpack-dev-server/bin/webpack-dev-server.js"
  }
