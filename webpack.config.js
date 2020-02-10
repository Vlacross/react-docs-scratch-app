const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",    /* tells webpack where the app starts */
  mode: "development",        /* specifies dev mode */
  module: {                   /* defines how modules are transformed and which ones are included */
    rules: [
      {                       /* First rule is about transforming ES6 and JSX syntax */
        test: /\.(js|jsx)$/,                                          /* regex to match */
        exclude: /(node_modules|bower_components)/,                   /* dont match anything in either of these */
        loader: "babel-loader",                                       /* directs webpack to use babel to transform */
        options: { presets: ["@babel/env"] }                          /* specify the "env" preset */
      },
      {
        test: /\.css$/,                                               /* Targets css files */
        use: ["style-loader", "css-loader"]                         
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },                     /* Allows us to specify which extensions WB will resolve */
  output: {                                                               /* this way you can import modules without needing to add their extensions */
    path: path.resolve(__dirname, "dist/"),                          /* Specifies where to put the bundled code */
    publicPath: "/dist/",                                            /* tells webpack-dev-server where to serve files from */
    filename: "bundle.js"
  },
  devServer: {                                                       /* specifies location of static files and port number for the dev-server */
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]                /* Instantiates an instance of the WB plugin - this allows changes to be seen */
};                                                                        /* without needing to refresh the page */