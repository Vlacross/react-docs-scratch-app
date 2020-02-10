Attempting to set up a react app from scratch by configuring alongside this guide:
  https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

  npm init && git init

  add gitignore and appended node_modules, dist, and gitignore to it
  
  added src and public dirs

  added index.html to public

  install babel 
    https://babeljs.io/docs/en/next/
    Babel is a toolchain that can be used to convert ECMA script into backwards compatible versions of JS.
    It is used to transform syntax, polyfill features that are mising in your dev env, Source code transformations, etc.
  
    run:
      npm i --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0

  install webpack:
    Webpack is a bundler: it has a configuration file that maps an entrypoint file that it then traverses through and compiles lists of 
      plugins/dependencies to load in the correct order.
      https://survivejs.com/webpack/what-is-webpack/
      https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/

    run:
      npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2

    Configure webpack.config.js
